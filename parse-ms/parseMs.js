function parseMs(milliSeconds) {
  var timeObject = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  };
  var isNegative = milliSeconds >= 0 ? false : true;
  var millisecInADay = 86400000;
  var millisecInAHour = 3600000;
  var millisecInAMin = 60000;
  var millisecInASec = 1000;
  timeObject.days =
    isNegative && milliSeconds === 0
      ? -0
      : parseInt(milliSeconds / millisecInADay);
  milliSeconds = milliSeconds % millisecInADay;
  timeObject.hours =
    isNegative && milliSeconds === 0
      ? -0
      : parseInt(milliSeconds / millisecInAHour);
  milliSeconds = milliSeconds % millisecInAHour;
  timeObject.minutes =
    isNegative && milliSeconds === 0
      ? -0
      : parseInt(milliSeconds / millisecInAMin);
  milliSeconds = milliSeconds % millisecInAMin;
  timeObject.seconds =
    isNegative && milliSeconds === 0
      ? -0
      : parseInt(milliSeconds / millisecInASec);
  timeObject.milliseconds =
    isNegative && milliSeconds === 0 ? -0 : milliSeconds % millisecInASec;

  return timeObject;
}

export { parseMs };
