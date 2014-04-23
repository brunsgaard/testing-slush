
angular.module('relationcityTesting', [
  'ngRoute',
  'relationcityTesting.todo',
  'relationcity-testing-templates'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/relationcity-testing/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
