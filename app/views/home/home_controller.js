
/* Controllers */
angular.module('amCompanion').controller('FullHomeController',
    function( AmcContextService ){
        'use strict';
        AmcContextService.initEmployees();
        this.employees = AmcContextService.getEmployees();
});
