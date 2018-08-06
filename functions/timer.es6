//FUNCTION timerstart
export function timerStart() {
  return new Date().valueOf();
};


//FUNCTION timerend
export function timerEnd(timerstart) {
  return new Date().valueOf() - timerstart;
};


//FUNCTION timerEndString
export function timerEndString(timerstart) {
  var timerend = new Date().valueOf();
  var duration = duration2String(timerend - timerstart);

  return duration;
};


//FUNCTION timerEndAlert
export function timerEndAlert(timerstart) {
  var timerend = new Date().valueOf();
  var duration = duration2String(timerend - timerstart);

  alert(duration);

  return duration;
};


//FUNCTION duration2Short
export function duration2Short(duration) {
  var sReturn, nDur;
  var nDur = new Date(duration);

  sReturn = nDur.getMinutes() + ':' + nDur.getSeconds() + ':' + nDur.getMilliseconds();

  return sReturn;
};


//FUNCTION duration2String
export function duration2String(nMS) {
  var sReturn, sComp, nDur;

  nDur = nMS % 1000;
  sComp = nDur.toString();
  while (sComp.length<3)
    sComp = "0" + sComp;
  sReturn = "." + sComp + " seconds";

  // Strip off last component
  nMS -= nDur;
  nMS /= 1000;

  nDur = nMS % 60;
  if (nDur)
    sReturn = nDur.toString() + sReturn;
  else
    sReturn = "0" + sReturn;

  // Strip off last component
  nMS -= nDur;
  nMS /= 60;

  nDur = nMS % 60;
  if (nDur > 0) {
    sReturn = nDur.toString() + " minutes, and " + sReturn;
  }

  // Strip off last component
  nMS -= nDur;
  nMS /= 60;

  if (nMS > 0) {
    sReturn = nMS.toString() + " hours, " + sReturn;
  }

  return sReturn;
};


//FUNCTION pause
export function pause(millis) {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
};


//FUNCTION sleep
export function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};


