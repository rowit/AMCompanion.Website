
amCompanion.directive('embedEmployee', function() {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: '/partials/embed/employee.html',
        controller:"EmbedEmployeeController",
        scope:
        {
            employee:"="
        }
    };
});


/* Controllers */
amCompanion.controller('EmbedEmployeeController',
    [ "$scope", "$filter","RoutesService",
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

            if( $scope.employee.CurrentObjectives === undefined || $scope.employee.CurrentObjectives.length === 0 )
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