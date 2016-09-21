define(function (require) {
  var angular = require('angular');
  var q = require('q');

  function bootstrap(element, moduleName) {
    angular.bootstrap(element, [moduleName]);
  }

  /**
   * First require the module's files, then angular-bootstrap it.
   *
   * @param moduleFileName file name
   * @param element the HTML element that the module will be bootstrap'ed to.
   * @returns {Q.Promise} returns a promise for the actual action.
   */
  function load(moduleFileName, element) {
    var defer = q.defer();

    require([moduleFileName], function (module) {
      bootstrap(element, module.name);
      defer.resolve(module);
    });

    return defer.promise;
  }

  return {
    load: load
  }
});