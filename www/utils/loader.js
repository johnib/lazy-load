define(function (require) {
  var q = require('q');

  var _ocLazyLoader;

  function init(ocLazyLoader) {
    _ocLazyLoader = ocLazyLoader;
  }

  function load(moduleName) {
    var defer = q.defer();

    _ocLazyLoader.load(moduleName)
      .then(function () {
        var moduleProps = require(moduleName); // required already, constant time
        defer.resolve(moduleProps);
      });

    return defer.promise;
  }

  return {
    init: init,
    load: load
  }
});