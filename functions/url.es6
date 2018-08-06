//FUNCTION urlGetParamByName
export function urlGetParamByName(name, defaultvalue=null, url=null) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return defaultvalue;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


//FUNCTION urlReplaceParamByName
export function urlReplaceParamByName(name, replace, url=null) {
    if (!url) url = window.location.href;

    let param = urlGetParamByName(name);
    if (param) {
        return url.replace(param, decodeURIComponent(url).replace(param, replace))
    }

    return url;
}


//FUNCTION urlRemoveParamByName
export function urlRemoveParamByName(name, url=null) {
    if (!url) url = window.location.href;

    let param = urlGetParamByName(name);
    if (param) {
        return url.replace(param, decodeURIComponent(url).replace(name + '=' + param, ''))
    }

    return url;
}


//FUNCTION urlGetParams
export function urlGetParams(url=null) {
  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}