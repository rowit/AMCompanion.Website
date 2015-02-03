/* Controllers */
amCompanion.controller('EmbedEmployeeController',
    function($scope, $filter, RoutesService){
        'use strict';
        var lastLink = $filter("limitTo")($filter("orderBy")($scope.employee.Links, "Date", "reverse"), 1);
        if( lastLink.length > 0 )
        {
            $scope.lastLink = lastLink[0];
        }

        $scope.openEmployeeView = function()
        {
            RoutesService.loadEmployeeView($scope.employee);
        };

        if( $scope.employee.Objectives === undefined || $scope.employee.Objectives.length === 0 )
        {
            $scope.percentObjectives = 0;
        }
        else
        {
            var sum = 0;

            angular.forEach( $scope.employee.Objectives, function( objective )
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
    }
);