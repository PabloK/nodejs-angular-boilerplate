var angular = require('angular');
require('angular-route');
var app = angular.module('app', [ 'ngRoute' ]);
//require('./services');
require('./controllers');
app.constant('VERSION', require('../package.json').version);
app.config(function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'public/partials/partial.html',
    controller: 'NavController',
  })
  .otherwise({
    redirectTo: '/',
  });
});
