
/* Controllers */
amCompanion.controller('FullHomeController',[
    "$scope","AmcContextService",
    function( $scope,AmcContextService ){
        'use strict';
        AmcContextService.initEmployees();
        $scope.employees = AmcContextService.getEmployees();
}]);
