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
