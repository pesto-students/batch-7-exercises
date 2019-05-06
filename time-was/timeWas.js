function timeWas(oldTime, currentTime) {
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  var milliSeconds = (!currentTime ? Date.now() : currentTime) - oldTime;

  if (milliSeconds < 1000) {
    return "just now";
  }
  var subtractTime = Math.floor(milliSeconds / YEARS);
  if (subtractTime !== 0) {
    return subtractTime == 1
      ? `${subtractTime} year ago`
      : `${subtractTime} years ago`;
  }
  subtractTime = Math.floor(milliSeconds / MONTHS);
  if (subtractTime !== 0) {
    return subtractTime == 1
      ? `${subtractTime} month ago`
      : `${subtractTime} months ago`;
  }

  subtractTime = Math.floor(milliSeconds / WEEKS);
  if (subtractTime !== 0) {
    return subtractTime == 1
      ? `${subtractTime} week ago`
      : `${subtractTime} weeks ago`;
  }
  subtractTime = Math.floor(milliSeconds / DAYS);
  if (subtractTime !== 0) {
    return `${subtractTime} days ago`;
  }
  subtractTime = Math.floor(milliSeconds / HOURS);
  if (subtractTime !== 0) {
    return subtractTime == 1
      ? `${subtractTime} hour ago`
      : `${subtractTime} hours ago`;
  }

  subtractTime = Math.floor(milliSeconds / MINUTES);
  if (subtractTime !== 0) {
    return subtractTime == 1
      ? `${subtractTime} minute ago`
      : `${subtractTime} minutes ago`;
  }

  subtractTime = Math.floor(milliSeconds / SECONDS);
  if (subtractTime !== 0) {
    return subtractTime == 1
      ? `${subtractTime} second ago`
      : `${subtractTime} seconds ago`;
  }
}

export { timeWas };
