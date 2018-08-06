//FUNCTION objectValue
// usage: arrayvalue(object, 'first_property', 'second_property')
// returns (if exists) : object['first_property']['second_property']
//TODO: 'first_property.second_property' uitsplitsen
export function objectValue() {
  var returnvalue = arguments[0] ? arguments[0] : null;

  if (returnvalue) {
    for (var i=1; i<arguments.length; i++) {
      returnvalue = returnvalue[arguments[i]];

      if (typeof returnvalue == 'undefined'
      ||  returnvalue === null) {
        returnvalue = null;
        break;
      }
    }
  }
  return returnvalue;
}


//FUNCTION objectAlert
export function objectAlert(obj){
  for(var key in obj) {
    alert('key: ' + key + '\n' + 'value: ' + obj[key]);
    if( typeof obj[key] === 'object' ) {
        alertObject(obj[key]);
    }
  }
};


