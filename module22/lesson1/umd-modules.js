// UMD (Universal Module Definition):

(function (root, factory) {

  // AMD support
  if (typeof define === 'function' && define.amd) {
    define(factory);

  // CommonJS support
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();

  // Global context
  } else {
    root.myModule = factory();
  }

}(this, function () { /* ... */ }));