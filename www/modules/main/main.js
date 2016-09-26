define(function (require) {
  var angular = require('angular');
  var loader = require('loader');
  require('ui-router');
  require('oclazyload');

  var app = angular.module('main', ['ui.router', 'oc.lazyLoad'])
    .config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
      console.log("main config");

      /* states definition */
      $stateProvider.state('main', {
        url: '/main',
        template: require('text!modules/main/views/main.html'),
        controller: "mainCtrl"
      });

      $urlRouterProvider.otherwise('main');

      /* lazy load definition */
      $ocLazyLoadProvider.config({
        jsLoader: requirejs,
        debug: true
      });
    })
    .run(function ($ocLazyLoad) {
      loader.init($ocLazyLoad);
    });

  app.controller('mainCtrl', function ($scope, $state) {
    console.log("mainCtrl init");

    $scope.lazyLoad = function () {
      var moduleName = 'lazy';

      loader.load(moduleName)
        .then(function (module) {
          $state.go(module.state);
        });
    };
  });
});