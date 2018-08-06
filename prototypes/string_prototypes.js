//PROTOTYPES
if (!String.prototype.trim)   {String.prototype.trim  = function() { return this.replace(/^\s*([\S\s]*?)\s*$/, "$1"); };}
if (!String.prototype.ltrim)  {String.prototype.ltrim = function() { return this.replace(/^ */,""); };}
if (!String.prototype.rtrim)  {String.prototype.rtrim = function() { return this.replace(/ *$/,""); };}

if (!String.prototype.toUpperCaseFirst) {String.prototype.toUpperCaseFirst = function() {return this.charAt(0).toUpperCase() + this.substr(1);};}
if (!String.prototype.toLowerCaseFirst) {String.prototype.toLowerCaseFirst = function() {return this.charAt(0).toLowerCase() + this.substr(1);};}
if (!String.prototype.toUpperCaseFirstAll) {
  String.prototype.toUpperCaseFirstAll = function() {
    return (this + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
  };
};

if (!String.prototype.manipulateCase) {
  String.prototype.manipulateCase = function(manipulator) {
    manipulator = manipulator.toLowerCase();

    if (manipulator!='' && typeof manipulator != 'undefined') {
//      alert(this, manipulator);
    }

    if (manipulator=='' || typeof manipulator == 'undefined') {
      return this;
    } else if (manipulator.contains('upfirstall')) {
      return this.toUpperCaseFirstAll();
    } else if (manipulator.contains('upfirst')) {
      return this.toUpperCaseFirst();
    } else if (manipulator.contains('up')) {
      return this.toUpperCase();
    } else if (manipulator.contains('low')) {
      return this.toLowerCase();
    } else {
      return this;
    }
  };
};


if (!String.prototype.csvcontains)   {
  String.prototype.csvcontains = function(str) {
    if (this.split(',').indexOf(str) == -1) {
      return false;
    } else {
      return true;
    }
  };
};


if (!String.prototype.contains) {
  String.prototype.contains = function(substr) {
    return (this.indexOf(substr) != -1);
  };
};


if (!String.prototype.left) {
  String.prototype.left  = function(n){
    if (n <= 0)
      return '';
    else if (n > this.length)
      return this;
    else
      return this.substring(0, n);
  };
};


if (!String.prototype.right) {
  String.prototype.right = function(n){
    if (n <= 0)
      return '';
    else if (n > this.length)
      return this;
    else {
      var len = this.length;
      return this.substring(len, len - n);
    }
  };
};

if (!String.prototype.leftpart) {
  String.prototype.leftpart = function(delim){
    var splitarray = this.split(delim);
    if (typeof splitarray[0] != 'undefined') {
      return splitarray[0];
    } else {
      return '';
    }
  };
};

if (!String.prototype.rightpart) {
  String.prototype.rightpart = function(delim, fromlastdelim){
    delim         = typeof delim != 'undefined' ? delim : '.';
    fromlastdelim = typeof fromlastdelim != 'undefined' ? fromlastdelim : false;

    var splitarray = this.split(delim);

    if (fromlastdelim) {
      if (splitarray.length) {
        return splitarray.slice(splitarray.length-1).join(delim);
      } else {
        return this;
      }
    } else {
      if (typeof splitarray[1] != 'undefined') {
        //return splitarray[1];
        return splitarray.slice(1).join(delim);
      } else {
        return '';
      }
    }
  };

};


if (!String.prototype.betweenpart) {
  String.prototype.betweenpart = function(delimleft,delimright) {
    return this.substring(this.lastIndexOf(delimleft) + delimleft.length, this.lastIndexOf(delimright));
  };
};


if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(target, replacement) {
    return this.split(target).join(replacement);
  };
};

if (!String.prototype.removeSpaces) {
  String.prototype.removeSpaces = function() {
    return  this.replace(/\s/g, '');
  };
};


if (!String.prototype.toBoolean) {
  String.prototype.toBoolean = function(defaultvalue){
    switch (this.toLowerCase()) {
      case 'true'   :
      case 'yes'    :
      case 'on'     :
      case '1'      :
        return true;
        break;

      case ''      :
      case 'false'  :
      case 'no'     :
      case 'off'    :
      case '0'      :
      case 'null'   :
      case '{null}' :
        return false;
        break;

      default:
        return defaultvalue;
        break;
    }
  };
};


//if (!String.prototype.quoted) {
//  String.prototype.quoted = function () {
//    function quote(string) {

/*
if (!String.prototype.key) {
  String.prototype.key = function() {
    return (this.indexOf('=') >= 0) ? this.split('=')[0] : this;
  };
};
*/

/*
if (!String.prototype.value) {
  String.prototype.value = function() {
    return (this.indexOf('=') >= 0) ? this.split('=')[1] : this;
  };
};
*/

//PROTOTYPE startsWith
if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.lastIndexOf(str, 0) === 0;
  };
};

//PROTOTYPE endsWith
if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
};

//PROTOTYPE encodeHTML
if (!String.prototype.encodeHTML) {
  String.prototype.encodeHTML = function () {
    return this.replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');

    //return this.replace(/&/g, '&amp;')
    //           .replace(/</g, '&lt;')
    //           .replace(/>/g, '&gt;')
    //           .replace(/"/g, '&quot;');
  };
};


//PROTOTYPE decodeHTML
if (typeof String.prototype.decodeHTML != 'function') {
  String.prototype.decodeHTML = function() {
      var map = {   'gt':'>'
                  , 'lt':'<'
                };

      return this.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, function($0, $1) {
          if ($1[0] === "#") {
              return String.fromCharCode($1[1].toLowerCase() === "x" ? parseInt($1.substr(2), 16)  : parseInt($1.substr(1), 10));
          } else {
              return map.hasOwnProperty($1) ? map[$1] : $0;
          }
      });
  };
};


//PROTOTYPE decodeHTML2
if (typeof String.prototype.decodeHTML2 != 'function') {
  String.prototype.decodeHTML2 = function() {
      var txt = document.createElement("textarea");
      txt.innerHTML = this;
      return txt.value;
  }
};


//PROTOTYPE escapeSpecialChars
if (typeof String.prototype.escapeSpecialChars != 'function') {
 String.prototype.escapeSpecialChars = function() {
    return this.replace(/\\n/g, "\\n")
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
  };
};


//PROTOTYPE toDate
if (!String.prototype.toDate) {
  String.prototype.toDate = function() {
    // Split timestamp into [ Y, M, D, h, m, s ]
    var t = this.split(/[- :]/);

    // Apply each element to the Date function
    var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);

    return d;
  };
};


//PROTOTYPE singular
if (!String.prototype.singular) {
  String.prototype.singular = function() {
    var parts = [];
    if (this.indexOf('|') !== -1) {
      parts = this.split('|');
      return parts[0];
    } else {
      return this;
    }
  };
};


//PROTOTYPE plural
if (!String.prototype.plural) {
  String.prototype.plural = function() {
    var parts = [];
    if (this.indexOf('|') !== -1) {
      parts = this.split('|');
      if (parts.length > 1) {
        if (parts[1][0] == '-') {
          return parts[0] + parts[1].rightpart('-');
        } else {
          return parts[1];
        }
      } else {
        return this;
      }
    } else {
      return this;
    }
  };
};


//PROTOTYPE quoted
if (!String.prototype.quoted) {
  String.prototype.quoted = function(quotestr) {
    quotestr = (typeof quotestr=='undefined') ? '"' : quotestr;

    if (this.length > 0) {
      if ((this[0] == "'" && this[this.length-1] == "'")
      ||  (this[0] == '"' && this[this.length-1] == '"')) {
        return this;
      } else {
        return quotestr + this + quotestr;
      }
    } else {
      return this;
    }
  };
};


//PROTOTYPE unquoted
if (!String.prototype.unquoted) {
  String.prototype.unquoted = function() {
    if (this.length > 0) {
      if ((this[0] == "'" && this[this.length-1] == "'")
      ||  (this[0] == '"' && this[this.length-1] == '"')) {
        return this.substring(1, this.length-1);
      } else {
        return this;
      }
    } else {
      return this;
    }
  };
};


//PROTOTYPE strip prefix
if (!String.prototype.stripPrefix) {
  String.prototype.stripPrefix = function(prefix) {
    if (is_string(prefix)
    &&  this.length >= prefix.length) {
      if (this.substr(0, prefix.length) == prefix) {
        return this.slice(prefix.length);
      }
    }

    return this;
  }
};


//FUNCTION strip suffix
if (!String.prototype.stripSuffix) {
  String.prototype.stripSuffix = function(prefix) {
    if (is_string(suffix)
    &&  this.length >= suffix.length) {
      if (this.substr(this.length - suffix.length, suffix.length) == suffix) {
        return this.slice(0, this.length - suffix.length);
      }
    }

    return this;
  }
};
