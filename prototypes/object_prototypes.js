//METHOD vuelog
if (!console.vuelog) {
  console.vuelog = function() {
    vuelog.apply(this, arguments);
  }
};

if (!console.vog) {
  console.vog = function() {
    vuelog.apply(this, arguments);
  }
};


/*
Object.prototype.clone = Array.prototype.clone = function()
{
    if (Object.prototype.toString.call(this) === '[object Array]')
    {
        var clone = [];
        for (var i=0; i<this.length; i++)
            clone[i] = this[i].clone();

        return clone;
    }
    else if (typeof(this)=="object")
    {
        var clone = {};
        for (var prop in this)
            if (this.hasOwnProperty(prop))
                clone[prop] = this[prop].clone();

        return clone;
    }
    else
        return this;
}
*/

/*
//METHOD objectOf
if (!Object.prototype.objectOf) {
  Object.prototype.objectOf = function(p,v,o) {
    o = (typeof o != 'undefined') ? o : '==';

    for(var property in this) {
      if (this.hasOwnProperty(property)) {
        if (is_array(v)) {
          //check multiple possible values
          //for(var i2=0; i2 < v.length; i2++) {
          //  if(this[i][p] == v[i2]) {
          //    a.push(this[i]);
          //  }
          //}
        } else {
          //check single value
          switch (o) {
            case '='  :
            case '==' :
              if(this[property][p] == v) {
                return this[property];
              }
              break;
            case '>=' :
              if(this[property][p] >= v) {
                return this[property];
              }
              break;
            case '<=' :
              if(this[property][p] <= v) {
                return this[property];
              }
              break;
            case '>'  :
              if(this[property][p] > v) {
                return this[property];
              }
              break;
            case '<'  :
              if(this[property][p] < v) {
                return this[property];
              }
              break;
          }
        }
      }
    }

    return {};
  };
};

//METHOD objectsOf
if (!Object.prototype.objectsOf) {
  Object.prototype.objectsOf = function(p,v,o) {
    o = (typeof o != 'undefined') ? o : '==';

    var a = [];

    for(var property in this) {
      if (this.hasOwnProperty(property)) {
        if (is_array(v)) {
          //check multiple possible values
          //for(var i2=0; i2 < v.length; i2++) {
          //  if(this[i][p] == v[i2]) {
          //    a.push(this[i]);
          //  }
          //}
        } else {
          //check single value
          switch (o) {
            case '='  :
            case '==' :
              if(this[property][p] == v) {
                a.push(this[property]);
              }
              break;
            case '>=' :
              if(this[property][p] >= v) {
                a.push(this[property]);
              }
              break;
            case '<=' :
              if(this[property][p] <= v) {
                a.push(this[property]);
              }
              break;
            case '>'  :
              if(this[property][p] > v) {
                a.push(this[property]);
              }
              break;
            case '<'  :
              if(this[property][p] < v) {
                a.push(this[property]);
              }
              break;
          }
        }
      }
    }

    return a;
  };
};

*/