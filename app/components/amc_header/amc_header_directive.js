angular.module('amCompanion').directive('amcHeader', function() {
    'use strict';
    return {
        restrict: 'E',
        bindToController:{
            homeDisplay:"=",
            label:"=",
            goBackHandler:"&",
            editMode:"="
        },
        controller:"AmcHeaderController",
        controllerAs:"header",
        templateUrl: 'app/components/amc_header/amc_header.html',
        scope:true
    };
});