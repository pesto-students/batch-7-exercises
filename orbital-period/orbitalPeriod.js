
const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; 

const getOrbitalPeriod = sizeOfEarth => Math.round ( 2 * Math.PI * Math.sqrt ((sizeOfEarth ** 3) / GM),);

function orbitalPeriod(array) {
 return array.map ((el) => {
    let sizeOfEarth = el.avgAlt + earthRadius;
    return {
      name : el.name,
      orbitalPeriod : getOrbitalPeriod(sizeOfEarth)
    }
  });
}

export {
  orbitalPeriod,
};
