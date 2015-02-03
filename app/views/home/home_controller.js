
/* Controllers */
amCompanion.controller('FullHomeController',
    function( $scope,AmcContextService ){
        'use strict';
        AmcContextService.initEmployees();
        $scope.employees = AmcContextService.getEmployees();
});
