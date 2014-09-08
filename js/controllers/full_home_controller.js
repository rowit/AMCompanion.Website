'use strict';

/* Controllers */
amCompanion.controller('FullHomeController',[
    "$scope","AuthService","AmcContextService",
    function( $scope, AuthService,AmcContextService ){


    AmcContextService.initEmployees();
    $scope.employees = AmcContextService.getEmployees();


}]);
