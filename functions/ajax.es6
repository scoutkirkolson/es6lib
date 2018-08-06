/* eslint-disable */
import $ from 'jquery'

//FUNCTION get
export function get(url, postdata, callbackSuccess, callbackError, callbackComplete)  {
  //get csrf token
  $.ajax({
    url           : url
    , async       : true
    , crossDomain : true
    , data        : postdata
    , dataType    : 'json'
    , method      : 'GET'
    , xhrFields: {
      withCredentials: true
    }
    , success   : function(data, textStatus, jqXHR) {
      //success
      if (typeof callbackSuccess == 'function') {
        callbackSuccess(data, textStatus, jqXHR)
      }
    }
    , error       : function(jqXHR, textStatus, errorThrown) {
      //error
      if (typeof callbackError == 'function') {
        callbackError(jqXHR, textStatus, errorThrown)
      }
    }

    , complete    : function(jqXHR, textStatus) {
      //complete
      if (typeof callbackComplete == 'function') {
        callbackComplete(jqXHR, textStatus)
      }
    }
  })
}

//FUNCTION post
export function post(url, postdata, callbackSuccess, callbackError, callbackComplete)  {
  //get csrf token
  $.ajax({
    url           : url
    , async       : true
    , crossDomain : true
    , data        : postdata
    , dataType    : 'json'
    , method      : 'POST'
    , xhrFields: {
      withCredentials: true
    }
    , success   : function(data, textStatus, jqXHR) {
      //success
      if (typeof callbackSuccess == 'function') {
        callbackSuccess(data, textStatus, jqXHR)
      }
    }
    , error       : function(jqXHR, textStatus, errorThrown) {
      //error
      if (typeof callbackError == 'function') {
        callbackError(jqXHR, textStatus, errorThrown)
      }
    }

    , complete    : function(jqXHR, textStatus) {
      //complete
      if (typeof callbackComplete == 'function') {
        callbackComplete(jqXHR, textStatus)
      }
    }
  })
}

//FUNCTION post
export function setCsrf(token)  {
  //set jquery
  $.ajaxSetup({
    headers: {
     'X-CSRF-TOKEN': token
    }
  });
}

