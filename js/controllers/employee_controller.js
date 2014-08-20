'use strict';

/* Controllers */
amCompanion.controller('EmployeeController',[
    "$scope","$routeParams","$location","EmployeesService", function(
        $scope,$routeParams,$location,EmployeesService){

        $scope.progressColors = [];

        var promise = EmployeesService.initEmployees();
        promise.then(function(){
            EmployeesService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = EmployeesService.getSelectedEmployee();

            for ( var i = 0 ; i < $scope.selectedEmployee.CurrentObjectives.length ; i++ )
            {
                $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.CurrentObjectives[i].progressionPercent/100);
            }
        })

    }]);
