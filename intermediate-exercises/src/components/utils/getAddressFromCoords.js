const GoogleMapsAPI = "https://maps.googleapis.com/maps/api";

function wait(timeout, work) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(work());
      } catch (error) {
        reject(error);
      }
    }, timeout);
  });
}

const retryTimeout = 5000;

function getAddressFromCoords(latitude, longitude) {
  const url = `${GoogleMapsAPI}/geocode/json?latlng=${latitude},${longitude}`;

  return fetch(url)
    .then(res => res.json())
    .then(json => {
      return json.status === "OVER_QUERY_LIMIT"
        ? // Wait for the query limit to reset.
          wait(retryTimeout, () => getAddressFromCoords(latitude, longitude))
        : json.results[0]
        ? json.results[0].formatted_address
        : "";
    });
}

let lastCallTime = 0;
const alreadyWarned = false;
let promise = null;

function throttledGetAddressFromCoords(latitude, longitude) {
  const currentTime = Date.now();

  if (lastCallTime + retryTimeout < currentTime) {
    lastCallTime = currentTime;
    promise = getAddressFromCoords(latitude, longitude);
  } else if (!alreadyWarned) {
    window.alert(
      "It looks like you're calling getAddressFromCoords many times " +
        "quickly in a loop. Take a closer look at the componentDidUpdate " +
        "function in <GeoAddress>..."
    );
  }

  return promise;
}

export default throttledGetAddressFromCoords;
