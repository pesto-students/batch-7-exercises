const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; // in km

const getOrbitalPeriod = sizeOfOrbit => Math.round(
  2 * Math.PI * Math.sqrt((sizeOfOrbit ** 3) / GM),
);

function orbitalPeriod(satellitesMotions) {
  return satellitesMotions.map((satellite) => {
    const sizeOfOrbit = satellite.avgAlt + earthRadius;

    return {
      name: satellite.name,
      orbitalPeriod: getOrbitalPeriod(sizeOfOrbit),
    };
  });
}

export { orbitalPeriod };
