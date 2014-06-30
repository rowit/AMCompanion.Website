'use strict';
/* Directives */
amCompanion.directive('amHeader', function() {
    return {
        restrict: 'E',
        controller:"HeaderController",
        templateUrl: './partials/header.html'
    }
});