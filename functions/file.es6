//FUNCTION fileName
export function fileName(filename) {
  filename = filename.replace(/^.*[\\\/]([^\\\/]*)$/i,"$1");
  filename = filename.replace(/\s/g,"_");
  filename = filename.toLowerCase();

  return filename;
}


//FUNCTION fileExtension
export function fileExtension(filename) {
  var re            = /(?:\.([^.]+))?$/;
  var resultarray   = re.exec(filename);

  if (is_array(resultarray)
  &&  array_key_exists(1, resultarray)) {
    return resultarray[1];
  } else {
    return false;
  }
}


//FUNCTION baseName
export function baseName(path, suffix) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Ash Searle (http://hexmen.com/blog/)
  // +   improved by: Lincoln Ramsay
  // +   improved by: djmix
  // *     example 1: basename('/www/site/home.htm', '.htm');
  // *     returns 1: 'home'

  var b = path.replace(/^.*[\/\\]/g, '');

  if (typeof(suffix) === 'string' && b.substr(b.length-suffix.length) === suffix) {
    b = b.substr(0, b.length-suffix.length);
  }

  return b;
}


