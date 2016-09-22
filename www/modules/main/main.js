define(function (require) {
  var angular = require('angular');
  var loader = require('loader');
  require('ui-router');

  var app = angular.module('main', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      console.log("main config");

      $stateProvider.state('main', {
        url: '/main',
        template: require('text!modules/main/views/main.html'),
        controller: "mainCtrl"
      });

      $urlRouterProvider.otherwise('main');
    });

  app.controller('mainCtrl', function ($scope, $state) {
    console.log("mainCtrl init");

    $scope.lazyLoad = function () {
      var moduleName = 'lazy';

      loader.load(moduleName, document.getElementById('module'))
        .then(function (module) {
          console.log(moduleName + " was loaded");

          $state.go(module.state);
        });
    };
  });
});