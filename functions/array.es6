//FUNCTION in_array
export function in_array(needle, haystack) {
  for (let h in haystack) {
    if (haystack[h] == needle) {
      return h;
      // or if you prefer to get the  key of the first found match use
      // return true;
    }
  }

  return false;
}


//FUNCTION array_key_exists
export function array_key_exists(key, search) {
  // Checks if the given key or index exists in the array
  //
  // version: 909.322
  // discuss at: http://phpjs.org/functions/array_key_exists    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Felix Geisendoerfer (http://www.debuggable.com/felix)
  // *     example 1: array_key_exists('kevin', {'kevin': 'van Zonneveld'});
  // *     returns 1: true
  // input sanitation
  if (!search || (search.constructor !== Array && search.constructor !== Object)){
      return false;
  }

  return key in search;
}


//FUNCTION array_object_search
export function array_object_search(array, propertyname, propertyvalue, defaultvalue) {
    propertyvalue = (typeof propertyvalue=='undefined') ? propertyname : propertyvalue;
    defaultvalue  = (typeof defaultvalue=='undefined') ? null : defaultvalue;

    if (array instanceof Array
    ||  array instanceof Object) {
      for(var key in array) {
        if (array[key] instanceof Object
        &&  propertyname != null && propertyname != ''
        &&  array[key].hasOwnProperty(propertyname)) {
          if (array[key][propertyname] == propertyvalue) {
            return array[key];
          }
        } else if (array[key] instanceof String || typeof array[key] == 'string') {
          if (key == propertyvalue) {
            return array[key];
          }
        } else if (array[key] instanceof Number || typeof array[key] == 'number') {
          if (key == propertyvalue) {
            return array[key];
          }
        }
      }
    }

    return defaultvalue;
}


//FUNCTION array_object_get
export function array_object_get(array, searchpropertyname, searchpropertyvalue, getpropertyname, defaultvalue) {
    defaultvalue  = (typeof defaultvalue=='undefined') ? null : defaultvalue;

    let elem = array_object_search(array, searchpropertyname, searchpropertyvalue);

    if (elem) {
        return typeof elem[getpropertyname] != 'undefined' ? elem[getpropertyname] : defaultvalue;
    }

    return defaultvalue;
}


//FUNCTION in_array_object
export function in_array_object(array, propertyname, propertyvalue) {
    return !is_false(array_object_search(array, propertyname, propertyvalue));
}


//FUNCTION serialize
export function serialize(mixed_val) {
  // Generates a storable representation of a value
  //
  // +   original by: Ates Goral (http://magnetiq.com)
  // +   adapted for IE: Ilia Kantor (http://javascript.ru)
  var map,idxobj,ser,class_name,props;

  switch (typeof(mixed_val)){
    case "number":
      if (isNaN(mixed_val) || !isFinite(mixed_val)){
          return false;
      } else{
          return (Math.floor(mixed_val) == mixed_val ? "i" : "d") + ":" + mixed_val + ";";
      }

    case "string":
      return "s:" + mixed_val.length + ":\"" + mixed_val + "\";";

    case "boolean":
      return "b:" + (mixed_val ? "1" : "0") + ";";

    case "object":
      if (mixed_val == null) {
        return "N;";

      } else if (mixed_val instanceof Array) {
        idxobj = { idx: -1 };
        map = [];
        for(var i=0; i<mixed_val.length;i++) {
          idxobj.idx++;
          ser = serialize(mixed_val[i]);

          if (ser) {
            map.push(serialize(idxobj.idx) + ser);
          }
        }

        return "a:" + mixed_val.length + ":{" + map.join("") + "}";

      } else {
        class_name = typeof(mixed_val);

        if (class_name == undefined){
          return false;
        }

        props = [];
        for (var prop in mixed_val) {
          ser = serialize(mixed_val[prop]);

          if (ser) {
            props.push(serialize(prop) + ser);
          }
        }
        return "O:" + class_name.length + ":\"" + class_name + "\":" + props.length + ":{" + props.join("") + "}";
      }

    case "undefined":
        return "N;";
  }

  return false;
}


//FUNCTION merge_arrays
export function merge_arrays() {
  //for (var i = 0; i < arguments.length; i++) {
  //
  //}
  return [].concat.apply([], arguments);
}


//FUNCTION array_to_tree
export function array_to_tree(arr, id_fieldname, parentid_fieldname, items_fieldname) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  if (typeof arr!='undefined') {
    // First map the nodes of the array to an object -> create a hash table.
    for(var i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem[id_fieldname]] = arrElem;
      mappedArr[arrElem[id_fieldname]][items_fieldname] = [];
    }

    for (var id in mappedArr) {
      if (mappedArr.hasOwnProperty(id)) {
        mappedElem = mappedArr[id];
        // If the element is not at the root level, add it to its parent array of children.
        if (mappedElem[parentid_fieldname]) {
          mappedArr[mappedElem[parentid_fieldname]][items_fieldname].push(mappedElem);
        }
        // If the element is at the root level, add it to first level elements array.
        else {
          tree.push(mappedElem);
        }
      }
    }
  }
  return tree;
}

