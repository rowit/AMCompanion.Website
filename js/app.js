// Declare app level module which depends on filters, and services
var amCompanion = angular.module('amCompanion', [
    'ngCookies','ngRoute','ngAnimate', 'igTruncate','angular-progress-arc','rzModule','monospaced.elastic'
]);

amCompanion.run(function() {
    FastClick.attach(document.body);
});