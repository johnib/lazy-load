define(function (require) {
  var angular = require('angular');

  var lazyApp = angular.module('lazy', ['main', 'ui.router'])
    .config(function ($stateProvider) {
      console.log("lazy config");

      $stateProvider.state('main.lazy', {
        url: '/lazy',
        template: require('text!modules/lazy/views/lazy.html'),
        controller: 'lazyCtrl'
      });
    });

  lazyApp.controller('lazyCtrl', function () {
    console.log("lazyCtrl init");
  });

  return {
    name: lazyApp.name,
    state: 'main.lazy'
  }
});