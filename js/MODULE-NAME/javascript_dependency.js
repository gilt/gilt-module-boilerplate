// This is a file that app.js depends on



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
  exports[moduleName] = create();
}

}(typeof exports === 'object' && exports || this, 'javascript_dependency' /* moduleName */));
