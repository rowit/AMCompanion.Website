'use strict';
amCompanion.directive('employeeHeader', function() {
    return {
        restrict: 'E',
        controller:"EmployeeHeaderController",
        templateUrl: './partials/employee_header.html'
    }
});

/* Controllers */
amCompanion.controller('EmployeeHeaderController', [ "$scope","$location","EmployeesService" , function($scope, $location, EmployeesService){

    $scope.goBack = function()
    {
        $location.path("/");
        EmployeesService.unsetSelectedEmployee();
    }

}]);
