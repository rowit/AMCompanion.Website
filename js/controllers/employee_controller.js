'use strict';

/* Controllers */
amCompanion.controller('EmployeeController',[
    "$scope","$routeParams","$location","EmployeesService", function(
        $scope,$routeParams,$location,EmployeesService
        ){

        var promise = EmployeesService.initEmployees();
        promise.then(function(){
            EmployeesService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = EmployeesService.getSelectedEmployee();
        })


        $scope.goBackFonction = function()
        {
            $location.path("/");
            EmployeesService.unsetSelectedEmployee();
        }

    }]);
