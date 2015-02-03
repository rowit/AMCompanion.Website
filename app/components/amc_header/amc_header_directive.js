amCompanion.directive('amcHeader', function() {
    'use strict';
    return {
        restrict: 'E',
        controller:"AmcHeaderController",
        templateUrl: 'app/components/amc_header/amc_header.html',
        scope:
        {
            homeDisplay:"=",
            libelle:"=",
            goBackHandler:"&",
            editMode:"="
        }
    };
});