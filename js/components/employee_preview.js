'use strict';
amCompanion.directive('employee', function() {
    return {
        restrict: 'E',
        templateUrl: './partials/employee_preview.html',
        controller:"EmployeePreviewController",
        scope:
        {
            employee:"="
        }
    }
});


/* Controllers */
amCompanion.controller('EmployeePreviewController',
    [ "$scope", "$filter","$location","EmployeesService",
        function($scope, $filter, $location, EmployeesService){

            var lastLink = $filter("limitTo")($filter("orderBy")($scope.employee.Links, "date", "reverse"), 1);
            if( lastLink.length > 0 )
            {
                $scope.lastLink = lastLink[0];
            }

            $scope.openEmployeeView = function()
            {
                EmployeesService.unsetSelectedEmployee();
                $location.path("/employee/" + $scope.employee.Id)
            }

            if( $scope.employee.CurrentObjectives == undefined || $scope.employee.CurrentObjectives.length == 0 )
            {
                $scope.percentObjectives = 0;
            }
            else
            {
                var sum = 0;

                angular.forEach( $scope.employee.CurrentObjectives, function( objective )
                {
                    sum += (objective.progressionPercent/100) * (objective.ponderation);
                });

                //we round up the number to one decimal
                $scope.percentObjectives = Math.round( sum * 10 ) / 10;

                if( $scope.percentObjectives < 25 )
                {
                    $scope.objectiveColor = "danger";
                }
                else if( $scope.percentObjectives < 50 )
                {
                    $scope.objectiveColor = "warning";
                }
                else if( $scope.percentObjectives < 75 )
                {
                    $scope.objectiveColor = "success";
                }
                else
                {
                    $scope.objectiveColor = "info";
                }

            }


        }]);
