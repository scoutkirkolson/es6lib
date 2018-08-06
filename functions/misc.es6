//FUNCTION is_string
export function is_string(s)  {
  return (typeof(s) != 'undefined') ? (typeof(s) === 'string' || s instanceof String) : false;
};
