function orbitalPeriod(array) {
  // using Kepler's third law
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  var resultOrbitalPeriods = [];
  array.map(sateliteData => {
    var avgAlt = sateliteData.avgAlt;
    var orbitSemiMajorAxis = Math.pow(avgAlt + earthRadius, 3);
    var orbitalPer = 2 * Math.PI * Math.sqrt(orbitSemiMajorAxis / GM);
    resultOrbitalPeriods.push({
      name: sateliteData.name,
      orbitalPeriod: Math.round(orbitalPer)
    });
  });

  return resultOrbitalPeriods;
}

export { orbitalPeriod };
