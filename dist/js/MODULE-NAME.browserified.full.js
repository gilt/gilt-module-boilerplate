(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  /*
    For testing only. No need to do UMD syntax :)
  */
  var MODULE_NAME = require('./MODULE-NAME/MODULE-NAME');

  function init () {
    alert('MODULE-NAME');
  }

  if (document.addEventListener !== undefined) {
    document.addEventListener('DOMContentLoaded', init);
  }  else {
    window.attachEvent('onload', init);
  }

})();

},{"./MODULE-NAME/MODULE-NAME":2}],2:[function(require,module,exports){
// This is a file that depends on javascript_dependency

(function(exports, moduleName) {
'use strict';

function create (dep) {

  /**
   * Description of method
   *
   * @private/@public
   * @method yourCodeHere
   *
   * @param {String|Boolean|Float} paramName
   *
   * @return {String|Boolean|Float}
   */
  function yourCodeHere (paramName) {
    return true;
  }

}

if (typeof define === 'function' && define.amd) {
  define(moduleName, ['./javascript_dependency'], create);

} else if (typeof module === 'object' && module.exports) {
  /*
    Using CommonJS syntax, we have to explicitly require each
    module because browserify uses static module analysis.
  */
  module.exports = create(require('./javascript_dependency'));

} else {
  /*
    Gilt build syntax. 'exports' variable could be window here
    or an empty object, as in Gilt's case
  */
  exports[moduleName] = create(exports.javascript_dependency || javascript_dependency);
}

}(typeof exports === 'object' && exports || this, 'MODULE-NAME' /* moduleName */));

},{"./javascript_dependency":3}],3:[function(require,module,exports){
// This is a file that MODULE_NAME.js depends on

(function(exports, moduleName) {
'use strict';

function create () {

  /**
   * Description of method
   *
   * @private/@public
   * @method yourCodeHere
   *
   * @param {String|Boolean|Float} paramName
   *
   * @return {String|Boolean|Float}
   */
  function yourCodeHere (paramName) {
    return true;
  }

}

if (typeof define === 'function' && define.amd) {
  define(moduleName, [], create);

} else if (typeof module === 'object' && module.exports) {
  /*
    Using CommonJS syntax, we have to explicitly require each
    module because browserify uses static module analysis.
  */
  module.exports = create();

} else {
  /*
    Gilt build syntax. 'exports' variable could be window here
    or an empty object, as in Gilt's case
  */
  exports[moduleName] = create();
}

}(typeof exports === 'object' && exports || this, 'javascript_dependency' /* moduleName */));

},{}]},{},[1]);
