'use strict';
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