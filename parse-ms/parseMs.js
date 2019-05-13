
function parseMs(milliseconds) {
  let flag = 0;
  if (milliseconds < 0) {
    flag = 1; 
    milliseconds = -1 * milliseconds;  
  }
  let ms = Math.floor((milliseconds % 1000) * 1000) / 1000;
  let seconds = Math.floor(milliseconds /1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let hours = Math.floor(minutes/60);
  minutes = minutes % 60;
  let days = Math.floor(hours/24);
  hours = hours % 24 ;

  let time = {
    days : flag ? -days : days,
    hours : flag ? -hours : hours,
    minutes : flag? -minutes : minutes,
    seconds : flag ? -seconds : seconds,
    milliseconds : flag ? -ms : ms,
  }
  return time;
}

export {
  parseMs,
};
