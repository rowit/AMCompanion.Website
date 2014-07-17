'use strict';


// Declare app level module which depends on filters, and services
var amCompanion = angular.module('amCompanion', [
  'ngRoute','ngAnimate',"ngTouch", 'igTruncate','ui.bootstrap'
]);

amCompanion.config(['$httpProvider', function ($httpProvider) {
    //Reset headers to avoid OPTIONS request (aka preflight)
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
}]);