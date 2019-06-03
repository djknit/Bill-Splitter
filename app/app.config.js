'use strict';

// from angularjs tutorial
angular.
  module('billSplitterApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<home-view></home-view>'
        }).
        when('/enter-bills', {
          template: '<bill-entry-view></bill-entry-view>'
        }).
        otherwise('/');
    }
  ]);
