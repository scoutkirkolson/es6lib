//METHOD indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(o,v,n) {
    v = (v==null)?null:v;
    n = (n==null)?0:n;

    var m = this.length;
    for(var i = n; i < m; i++) {
      if (is_object(this[i])) {
        if (this[i][o]) {
          if (this[i][o] == v) {
            return i;
          }
        }
      } else if (is_string(this[i])
             ||  is_number(this[i])
             ||  is_bool(this[i])) {
        if(this[i] == o) {
           return i;
        }
      }
    }

    return -1;
  };
};


//METHOD indexOfObject
if (!Array.prototype.indexOfObject) {
  Array.prototype.indexOfObject = function(p,v,o) {
    o = (typeof o != 'undefined') ? o : '==';

    var m = this.length;
    for(var i = 0; i < m; i++) {
      switch (o) {
        case '='  :
        case '==' :
          if(this[i][p] == v) {
            return i;
          }
          break;
        case '>=' :
          if(this[i][p] >= v) {
            return i;
          }
          break;
        case '<=' :
          if(this[i][p] <= v) {
            return i;
          }
          break;
        case '>'  :
          if(this[i][p] > v) {
            return i;
          }
          break;
        case '<'  :
          if(this[i][p] < v) {
            return i;
          }
          break;
      }
    }

    return false;
  };
};


//METHOD objectOf
if (!Array.prototype.objectOf) {
  Array.prototype.objectOf = function(p,v,o) {
    o = (typeof o != 'undefined') ? o : '==';

    var m = this.length;
    for(var i = 0; i < m; i++) {
      switch (o) {
        case '='  :
        case '==' :
          if (this[i])
          if(this[i]
          && this[i][p] == v) {
            return this[i];
          }
          break;
        case '>=' :
          if(this[i]
          && this[i][p] >= v) {
            return this[i];
          }
          break;
        case '<=' :
          if(this[i]
          && this[i][p] <= v) {
            return this[i];
          }
          break;
        case '>'  :
          if(this[i]
          && this[i][p] > v) {
            return this[i];
          }
          break;
        case '<'  :
          if(this[i]
          && this[i][p] < v) {
            return this[i];
          }
          break;
      }
    }

    return false;
  };
};



//METHOD objectsOf
if (!Array.prototype.objectsOf) {
  Array.prototype.objectsOf = function(p,v,o) {
    o = (typeof o != 'undefined') ? o : '==';

    var a = [];

    for(var i=0; i < this.length; i++) {
      if (is_array(v)) {
        //check multiple possible values
        for(var i2=0; i2 < v.length; i2++) {
          if(this[i][p] == v[i2]) {
            a.push(this[i]);
          }
        }
      } else {
        //check single value
        switch (o) {
          case '='  :
          case '==' :
            if(this[i][p] == v) {
              a.push(this[i]);
            }
            break;
          case '>=' :
            if(this[i][p] >= v) {
              a.push(this[i]);
            }
            break;
          case '<=' :
            if(this[i][p] <= v) {
              a.push(this[i]);
            }
            break;
          case '>'  :
            if(this[i][p] > v) {
              a.push(this[i]);
            }
            break;
          case '<'  :
            if(this[i][p] < v) {
              a.push(this[i]);
            }
            break;
        }
      }
    }

    return a;
  };
};


//METHOD objectOf
if (!Array.prototype.propertyOf) {
  Array.prototype.propertyOf = function(p,v,d,o) {
    var obj = this.objectOf(p,v,o);

    if (obj
    &&  obj[d]) {
      return obj[d];
    } else {
      return null;
    }
  };
};


//METHOD indexOfPart
if (!Array.prototype.indexOfPart) {
  Array.prototype.indexOfPart = function(v,n) {
    n = (n==null) ? 0 : n;

    var m = this.length;
    for(var i = n; i < m; i++)
      //if(this[i].search(/v/i) >= 0)
      if(this[i].search(v) >= 0)
         return i;
    return -1;
  };
};


//METHOD inArray
if (!Array.prototype.inArray) {
  Array.prototype.inArray = function(value){
    var i;
    for(i=0; i < this.length; i++){
      if(this[i] === value)
        return true;
    };
    return false;
  };
};


//METHOD unique
if (!Array.prototype.unique) {
  Array.prototype.unique = function() {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
      for(var j=i+1; j<l; j++) {
        // If this[i] is found later in the array
        if (this[i] === this[j])
          j = ++i;
      }
      a.push(this[i]);
    }
    return a;
  };
};


//METHOD isNull
if (!Array.prototype.isNull) {
  Array.prototype.isNull = function () {
    return this.join().replace(/,/g,'').length === 0;
  };
}


//METHOD clean
if (!Array.prototype.clean) {
  Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == deleteValue) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };
}


//METHOD remove
if (!Array.prototype.remove) {
  Array.prototype.remove = function(v) {
    var i = this.indexOf(v);

    if (i > -1) {
      array_splice(i,1);
      return true;
    } else {
      return false;
    }
  };
};


//METHOD removeObjectOf
if (!Array.prototype.removeObjectOf) {
  Array.prototype.removeObjectOf = function(p,v,n) {
    n = (n==null)?0:n;

    var m = this.length;
    for(var i = n; i < m; i++) {
      if(this[i][p] == v) {
        this.splice(i,1);

        return true;
      }
    }

    return false;
  };
};