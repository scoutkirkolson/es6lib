//GLOBAL variables
if (typeof window.FALSE == 'undefined')  {window.FALSE  = false;};
if (typeof window.TRUE == 'undefined')   {window.TRUE   = true;};
if (typeof window.NULL == 'undefined')   {window.NULL   = null;};

export function random(max) {
  let anynumber = 1+ parseInt(100000000*Math.random()) % max;
  return(anynumber);
};


//FUNCTION S1
export function S1() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};


//function S4
export function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};


//FUNCTION uuid
export function uuid() {
   return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
};


//FUNCTION uuid
export function uuid_rfc4122(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

//FUNCTION guid
//guid = function() {
//   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
//};


//FUNCTION guid
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
};

/*
//FUNCTION valueOrBool
valueOrBool = function valueOrBool(value) {
  var returnvalue = value;

  if (typeof value == 'string') {
    if (value.toLowerCase() == 'true') {
      returnvalue = true;
    } else {
      switch (value.toLowerCase()) {
        case "true":
        case "yes":
        case "1":
          returnvalue = true;
        case "false":
        case "no":
        case "0":
          returnvalue = false;
        default:
          returnvalue = value;
      }
    }
  } else if (typeof value == 'number') {
    if (value == 0) {
      returnvalue =  false;
    } else {
      returnvalue =  true;
    }
  } else if (typeof value == 'boolean') {
    returnvalue = value;
  }

  return returnvalue;
};


//FUNCTION valueOrFloat
valueOrFloat = function valueOrFloat(value, floatval) {
  var returnvalue = false;

  if (!isNaN(parseFloat(value))) {
    returnvalue = parseFloat(value);
  } else {
    returnvalue = floatval;
  }

  if (returnvalue === true) {returnvalue = 1;}

  return returnvalue;
};
*/


/*
//FUNCTION cursorSet
cursorSet = function cursorSet(str) {
  document.body.style.cursor = str;
};


//FUNCTION cursorClear
cursorClear = function cursorClear() {
  document.body.style.cursor = 'default';
};
*/


/*
//FUNCTION getInternetExplorerVersion
getInternetExplorerVersion = function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
};


//FUNCTION checkVersion
var checkVersion = function checkVersion() {
  var msg = "You're not using Internet Explorer.";
  var ver = getInternetExplorerVersion();

  if ( ver > -1 )
  {
    if ( ver >= 8.0 )
      msg = "You're using a recent copy of Internet Explorer.";
    else
      msg = "You should upgrade your copy of Internet Explorer.";
  }
  alert( msg );
};
*/


//FUNCTION wrap
var wrap = function wrap(functionToWrap, before, after, thisObject) {
    return function () {
        var args = Array.prototype.slice.call(arguments),
            result;
        if (before) before.apply(thisObject || this, args);
        result = functionToWrap.apply(thisObject || this, args);
        if (after) after.apply(thisObject || this, args);
        return result;
    };
};

/*
isMobile = {
    Android: function() {
    return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
*/

/*
die = function die(msg) {
  throw new Error(msg);
};
*/

