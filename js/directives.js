'use strict';
/* Directives */
amCompanion.directive('amHeader', function() {
    return {
        restrict: 'E',
        controller:"HeaderController",
        templateUrl: './partials/header.html'
    }
});

amCompanion.directive('amLinkPreview', function() {
    return {
        restrict: 'E',
        templateUrl: './partials/link_preview.html',
        scope:
        {
            link:"="
        }
    }
});