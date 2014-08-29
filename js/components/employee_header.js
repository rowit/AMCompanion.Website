'use strict';
amCompanion.directive('employeeHeader', function() {
    return {
        restrict: 'E',
        controller:"EmployeeHeaderController",
        templateUrl: './partials/employee_header.html',
        scope:
        {
            editMode:"="
        }
    }
});

/* Controllers */
amCompanion.controller('EmployeeHeaderController', [ "$scope","$location","EmployeesService" , function($scope, $location, EmployeesService){

    $scope.goBack = function()
    {
        $location.path("/");
        EmployeesService.unsetSelectedEmployee();
    }

    $scope.getNomPrenom = function()
    {
        var employee = EmployeesService.getSelectedEmployee();
        var str = "";
        if( employee != undefined )
        {
            str = employee.FirstName + " " + employee.LastName;
        }
        return str;
    }

    $scope.toggleEditMode = function()
    {
        $scope.$emit("startEdit");
    }

    $scope.validateEditMode = function()
    {
        $scope.$emit("validateEdit");
    }

    $scope.cancelEditMode = function()
    {
        $scope.$emit("cancelEdit");
    }

}]);
