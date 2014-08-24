'use strict';
amCompanion.directive('linkHeader', function() {
    return {
        restrict: 'E',
        controller:"LinkHeaderController",
        templateUrl: './partials/link_header.html'
    }
});

/* Controllers */
amCompanion.controller('LinkHeaderController', [ "$scope","$location", "EmployeesService" , function($scope, $location, EmployeesService){

    $scope.goBack = function()
    {
        $location.path("/employee/" + $scope.selectedEmployee.Id)
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

}]);
