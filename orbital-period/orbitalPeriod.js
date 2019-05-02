function orbitalPeriod(satellites) {
  // Constant for Kepler's Third Law
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  satellites.forEach((satellite) => {
    // Using Kepler's Third Law
    const a3 = (satellite.avgAlt + earthRadius) ** 3;
    const period = 2 * Math.PI * Math.sqrt(a3 / GM);
    satellite.orbitalPeriod = Math.round(period);
    delete satellite.avgAlt;
  });

  return satellites;
}

export { orbitalPeriod };
