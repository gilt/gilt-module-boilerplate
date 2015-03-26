// This is a file that depends on javascript_dependency

(function(exports, moduleName) {
'use strict';



function create (app) {

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
  define(moduleName, ['./app'], create);

} else if (typeof module === 'object' && module.exports) {
  /*
    Using CommonJS syntax, we have to explicitly require each
    module because browserify uses static module analysis.
  */
  module.exports = create(require('./app'));

} else {
  /*
    Gilt build syntax. 'exports' variable could be window here
    or an empty object, as in Gilt's case
  */
  exports[moduleName] = create(exports.javascript_dependency || javascript_dependency);
}

}(typeof exports === 'object' && exports || this, 'app' /* moduleName */));
