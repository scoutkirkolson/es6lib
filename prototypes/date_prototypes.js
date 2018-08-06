if (!Date.prototype.toDateString) {
  Date.prototype.toDateString = function () {
    return isNaN (this.getTime()) ? 'NaN' : [this.getMonth() < 9 ? '0' + (this.getMonth() + 1) : this.getMonth() + 1, this.getDate() < 10 ? '0' + this.getDate() : this.getDate(), this.getFullYear()].join ('/');
  };
};


if (!Date.prototype.yyyymmdd) {
 Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]); // padding
  };
};


if (!Date.prototype.yyyymmddhhiiss) {
 Date.prototype.yyyymmddhhiiss = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   var hh  = this.getHours().toString();
   var ii  =  this.getMinutes().toString();
   var ss = this.getSeconds().toString();

   return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]) + (hh[1]?hh:"0"+hh[0]) + (ii[1]?ii:"0"+ii[0]) + (ss[1]?ss:"0"+ss[0]); // padding
  };
};


if (!Date.prototype.toMySQLDateTimeString) {
  Date.prototype.toMySQLDateTimeString = function() {
    return this.getFullYear() + "-" + twoDigits(1 + this.getMonth()) + "-" + twoDigits(this.getDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getMinutes()) + ":" + twoDigits(this.getSeconds());
  };
};


if (!Date.prototype.toMySQLDateString) {
  Date.prototype.toMySQLDateString = function() {
    return this.getFullYear() + "-" + twoDigits(1 + this.getMonth()) + "-" + twoDigits(this.getDate());
  };
};


if (!Date.prototype.toMySQLTimeString) {
  Date.prototype.toMySQLTimeString = function() {
    return twoDigits(this.getHours()) + ":" + twoDigits(this.getMinutes()) + ":" + twoDigits(this.getSeconds());
  };
};


if (!Date.prototype.toMySQLString) {
  Date.prototype.toMySQLString = function() {
    return this.toMySQLDateTimeString();
  };
};

if (!Date.prototype.diffDays) {
  Date.prototype.diffDays = function(date2) {
    //negative=past, positive=future
    var timeDiff = this.getTime() - date2.getTime();
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
  }
};

if (!Date.prototype.diffHours) {
  Date.prototype.diffHours = function(date2) {
    //negative=past, positive=future
    var timeDiff = this.getTime() - date2.getTime();
    var diffDays = Math.ceil(timeDiff / (1000 * 3600));

    return diffDays;
  }
};
