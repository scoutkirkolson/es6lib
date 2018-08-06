import * as Cmp from './compare.es6';

//FUNCTION unquote
export function unquote(str) {
  if (typeof str === 'string'
  &&  str.length > 0) {
    if ((str[0] === "'" && str[str.length-1] === "'")
    ||  (str[0] === '"' && str[str.length-1] === '"')) {
      return str.substring(1, str.length-1);
    } else {
      return str;
    }
  } else {
    return str;
  }
}


//FUNCTION quote
export function quote(str, quotestr) {
  quotestr = (typeof quotestr === 'undefined') ? '"' : quotestr;

  if (typeof str === 'string'
  &&  str.length > 0) {
    if ((str[0] === "'" && str[str.length-1] === "'")
    ||  (str[0] === '"' && str[str.length-1] === '"')) {
      return str;
    } else {
      return quotestr + str + quotestr;
    }
  } else {
    return str;
  }
}


//FUNCTION comparetext
export function comparetext(string1, string2) {
  string1 = forceString(string1);
  string2 = forceString(string2);

  return Cmp.coalesce(string1,' ').toLowerCase().trim() === Cmp.coalesce(string2,' ').toLowerCase().trim()
}


//FUNCTION addslashes
export function addslashes(str) {
  if(typeof str === 'string') {
    str=str.replace(/\\/g,'\\\\');
    str=str.replace(/\'/g,'\\\'');
    str=str.replace(/\"/g,'\\"');
    str=str.replace(/\0/g,'\\0');
    str=str.replace(/\{/g,'\\{');
    str=str.replace(/\}/g,'\\}');
    str=str.replace(/\:/g,'\\:');
    str=str.replace(/\&/g,'\\&');
  }
  
  return str;
}


//FUNCTION stripslashes
export function stripslashes(str) {
  if(typeof str === 'string') {
    str=str.replace(/\\'/g,'\'');
    str=str.replace(/\\"/g,'"');
    str=str.replace(/\\0/g,'\0');
    str=str.replace(/\\\\/g,'\\');
  }

  return str;
}


//FUNCTION inputlimit_numbers
export function inputlimit_numbers(myfield, e, dec) {
  var key;
  var keychar;

  if (window.event)
     key = window.event.keyCode;
  else if (e)
     key = e.which;
  else
     return true;
  keychar = String.fromCharCode(key);

  // control keys
  if ((key==null) || (key===0) || (key===8) || (key===9) || (key===13) || (key===27) )
     return true;

  // numbers
  return (('0123456789.,').indexOf(keychar) > -1);
}


//FUNCTION inputlimit_integers
export function inputlimit_integers(myfield, e, dec) {
  var key;
  var keychar;

  if (window.event)
     key = window.event.keyCode;
  else if (e)
     key = e.which;
  else
     return true;

  keychar = String.fromCharCode(key);

  if ((key==null) || (key===0) || (key===8) || (key===9) || (key===13) || (key===27) )
      // control keys
      return true;
  else
      // numbers
      return (('0123456789').indexOf(keychar) > -1)
}


//FUNCTION replaceTag
export function replaceTag(tag) {
   return tagsToReplace[tag] || tag;
}


//FUNCTION safe_tags_replace
export function safe_tags_replace(str) {
   return (typeof str === 'string') ? str.replace(/[&<>]/g, replaceTag) : str;
}


//FUNCTION strip_tags
export function striptags (str) {
  var tmp = document.createElement('DIV');
  tmp.innerHTML = str;

  return tmp.textContent || tmp.innerText;
}


//FUNCTION add_prefix
export function add_prefix(str, prefix) {
  return prefix + strip_prefix(str, prefix);
}


//FUNCTION strip trailing
export function strip_trailing(str, prefix) {
  return strip_prefix(str, prefix);
}


//FUNCTION strip prefix
export function strip_prefix(str, prefix) {
  if (Cmp.is_string(str)
  &&  Cmp.is_string(prefix)
  &&  str.length >= prefix.length) {
    if (str.substr(0, prefix.length) === prefix) {
      return str.slice(prefix.length);
    }
  }

  return str;
}


//FUNCTION strip suffix
export function strip_suffix(str, suffix) {
  if (Cmp.is_string(str)
  &&  str.length >= suffix.length) {
    if (str.substr(str.length - suffix.length, suffix.length) === suffix) {
      return str.slice(0, str.length - suffix.length);
    }
  }

  return str;
}


//FUNCTION striplastslash
export function striplastslash(str) {
  return strip_suffix(str, '/');
}


//FUNCTION stripfirstslash
export function stripfirstslash (str) {
  return strip_prefix(str, '/');
}


//FUNCTION serialize
export function serialize (mixed_value) {
  // http://kevin.vanzonneveld.net
  // +   original by: Arpad Ray (mailto:arpad@php.net)
  // +   improved by: Dino
  // +   bugfixed by: Andrej Pavlovic
  // +   bugfixed by: Garagoth
  // +      input by: DtTvB (http://dt.in.th/2008-09-16.string-length-in-bytes.html)
  // +   bugfixed by: Russell Walker (http://www.nbill.co.uk/)
  // +   bugfixed by: Jamie Beck (http://www.terabit.ca/)
  // +      input by: Martin (http://www.erlenwiese.de/)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net/)
  // +   improved by: Le Torbi (http://www.letorbi.de/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net/)
  // +   bugfixed by: Ben (http://benblume.co.uk/)
  // %          note: We feel the main purpose of this function should be to ease the transport of data between php & js
  // %          note: Aiming for PHP-compatibility, we have to translate objects to arrays
  // *     example 1: serialize(['Kevin', 'van', 'Zonneveld']);
  // *     returns 1: 'a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}'
  // *     example 2: serialize({firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'});
  // *     returns 2: 'a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}'
  var val, key, okey,
    ktype = '', vals = '', count = 0,
    _utf8Size = function(str) {
      var size = 0,
        i = 0,
        l = str.length,
        code = '';
      for (i = 0; i < l; i++) {
        code = str.charCodeAt(i);
        if (code < 0x0080) {
          size += 1;
        }
        else if (code < 0x0800) {
          size += 2;
        }
        else {
          size += 3;
        }
      }
      return size;
    },
    _getType = function(inp) {
      var match, key, cons, types, type = typeof inp;

      if (type === 'object' && !inp) {
        return 'null';
      }
      if (type === 'object') {
        if (!inp.constructor) {
          return 'object';
        }
        cons = inp.constructor.toString();
        match = cons.match(/(\w+)\(/);
        if (match) {
          cons = match[1].toLowerCase();
        }
        types = ['boolean', 'number', 'string', 'array'];
        for (key in types) {
          if (cons == types[key]) {
            type = types[key];
            break;
          }
        }
      }
      return type;
    },
    type = _getType(mixed_value)
  ;

  switch (type) {
    case 'function':
      val = '';
      break;
    case 'boolean':
      val = 'b:' + (mixed_value ? '1' : '0');
      break;
    case 'number':
      val = (Math.round(mixed_value) === mixed_value ? 'i' : 'd') + ':' + mixed_value;
      break;
    case 'string':
      val = 's:' + _utf8Size(mixed_value) + ':"' + mixed_value + '"';
      break;
    case 'array': case 'object':
      val = 'a';
  /*
        if (type === 'object') {
          var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
          if (objname == undefined) {
            return;
          }
          objname[1] = this.serialize(objname[1]);
          val = 'O' + objname[1].substring(1, objname[1].length - 1);
        }
        */

      for (key in mixed_value) {
        if (mixed_value.hasOwnProperty(key)) {
          ktype = _getType(mixed_value[key]);
          if (ktype === 'function') {
            continue;
          }

          okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
          vals += this.serialize(okey) + this.serialize(mixed_value[key]);
          count++;
        }
      }
      val += ':' + count + ':{' + vals + '}';
      break;
    case 'undefined':
      // Fall-through
    default:
      // if the JS object has a property which contains a null value, the string cannot be unserialized by PHP
      val = 'N';
      break;
  }
  if (type !== 'object' && type !== 'array') {
    val += ';';
  }
  return val;
}


//FUNCTION charstring
export function charstring(chr, num) {
  var str = '';
  for (var i=0;i< num;i++) {
    str += chr;
  }

  return str;
}

//FUNCTION htmlEncode
export function htmlEncode(value){
  //create a in-memory div, set it's inner text(which jQuery automatically encodes)
  //then grab the encoded contents back out.  The div never exists on the page.
  return $('<div/>').text(value).html();
}


//FUNCTION htmlDecode
export function htmlDecode(value){
  return $('<div/>').html(value).text();
}


//FUNCTION deCase
export function deCase(s) {
  return s.replace(/[A-Z]/g, function(a) {
    return '-' + a.toLowerCase();
  });
}


//FUNCTION upfirst
export function upfirst(string, lowrest) {
  lowrest = typeof lowrest === 'undefined' ? false : lowrest;

  if (Cmp.is_string(string)) {
    if (lowrest) {
      string = string.toLowerCase();
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return string;
  }
}


//FUNCTION lowfirst
export function lowfirst(string, uprest) {
  if (Cmp.is_string(string)) {
    if (uprest) {
      string = string.toUpperCase();
    }

    return string.charAt(0).toLowerCase() + string.slice(1);
  } else {
    return string;
  }
}


//FUNCTION upfirstall
export function upfirstall(string) {
    return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


//FUNCTION lowfirstall
export function lowfirstall(string) {
    return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
}


//FUNCTION strtobool
export function strtobool(value, defaultvalue) {
  defaultvalue = typeof defaultvalue != 'undefined' ? defaultvalue: value;

  if (Cmp.is_string(value)) {
    switch(value.toLowerCase()){
      case "true":
      case "yes":
      case "on":
      case "1":
        return true;

      case "false"  :
      case "no"     :
      case "0"      :
      case ""       :
      case null     :
        return false;

      default       :
        return defaultvalue;
    }
  } else if (Cmp.is_bool(value)) {
    return value;
  } else {
    return defaultvalue;
  }
}


//FUNCTION strtodate
export function strtodate(string, defaultvalue) {
  if (is_string(string)) {
    // Split timestamp into [ Y, M, D]
    var t = string.split(/[-]/);

    // Apply each element to the Date function
    return new Date(t[0], t[1]-1, t[2]);
  }
}


//FUNCTION strtodatetime
export function strtodatetime(string, defaultvalue) {
  if (Cmp.is_string(string)) {
      // Split timestamp into [ Y, M, D, h, m, s ]
      var t = string.split(/[- :]/);

      // Apply each element to the Date function
      return new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
  }
}


//FUNCTION propfromstring
export function propfromstring(obj, string) {
  var arr           = string.split('.');
  var returnobject  = obj;

  for (i = 0; i < arr.length; i++) {
    if (returnobject[arr[i]]) {
      returnobject = returnobject[arr[i]];
    }
  }

  return returnobject;
}


//FUNCTION forceString
export function forceString(mixed_var) {
  if (typeof(mixed_var) === 'undefined'
  ||  Cmp.is_null(mixed_var)) {
    return '';
  } else {
    return mixed_var.toString();
  }
}


//FUNCTION valueToString
export function valueToString(value) {
  var returnvalue = '';

  switch (typeof value) {
    case 'string'   :
      returnvalue = value;
      break;

    case 'number'   :
    case 'boolean'  :
      returnvalue = value.toString();
      break;

    case 'object'   :
      if (Cmp.is_array(value)) {
        returnvalue = value.toString();
      } else if (Cmp.is_null(value)) {
        returnvalue = '';
      } else {
        returnvalue = value.toString();
      }

      break;
  }

  return returnvalue;
}


//FUNCTION urlencode
export function urlencode(str) {
  return escape(str).replace('+', '%2B').replace('%20', '+').replace('*', '%2A').replace('/', '%2F').replace('@', '%40');
}


//FUNCTION urldecode
export function urldecode(str) {
  return unescape(str.replace('+', ' '));
}


//FUNCTION twoDigits
export function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}
