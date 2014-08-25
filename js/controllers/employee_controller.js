'use strict';

/* Controllers */
amCompanion.controller('EmployeeController',[
    "$scope","$routeParams","$location","$anchorScroll","EmployeesService", function(
        $scope,$routeParams,$location, $anchorScroll ,EmployeesService){

        $scope.progressColors = [];

        $anchorScroll();

        var promise = EmployeesService.initEmployees();
        promise.then(function(){
            EmployeesService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = EmployeesService.getSelectedEmployee();

            for ( var i = 0 ; i < $scope.selectedEmployee.CurrentObjectives.length ; i++ )
            {
                $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.CurrentObjectives[i].progressionPercent/100);
            }
        });

        $scope.showFullLink = function( link )
        {
            $location.path("/link/"+$scope.selectedEmployee.Id+"/"+link.date);
        }


    }]);
