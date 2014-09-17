'use strict';

/* Controllers */
amCompanion.controller('FullObjectiveController',[
        "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService", function(
            $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService){

            $anchorScroll();
            $scope.editMode = false;
            $scope.newMode = false;

            /**
             * This methods is passed in parameter to header, it allow to go back to employee view
             */
            $scope.goBack = function()
            {
                RoutesService.loadEmployeeView($scope.selectedEmployee);
            }

            $scope.getName = function()
            {
                var employee = AmcContextService.getSelectedEmployee();
                var str = "";
                if( employee != undefined )
                {
                    str = employee.FirstName + " " + employee.LastName;
                }
                return str;
            }

            var promise = AmcContextService.initEmployees();
            promise.then(
                function()
                {
                    AmcContextService.setSelectedEmployeeFromId($routeParams.id);
                    $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
                    $scope.nomPrenom = $scope.getName();
                    console.log($routeParams.index);
                    if( $routeParams.index == "new" )
                    {
                        $scope.selectedObjective = {};
                        $scope.newMode = true;
                        $scope.editMode = true;
                        $scope.nomPrenom = "Nouvel Objectif";
                    }
                    else
                    {
                        $scope.selectedObjective = $scope.selectedEmployee.CurrentObjectives[$routeParams.index];
                    }

                }
            )

            $scope.$on( "startEdit" , function()
            {
                $scope.selectedObjectiveBack = angular.copy($scope.selectedObjective);
                $scope.editMode = true;
            });

            $scope.$on("cancelEdit",function()
            {
                $scope.selectedObjective = $scope.selectedObjectiveBack;
                $scope.editMode = false;
                if( $scope.newMode )
                {
                    $scope.goBack();
                }
            });

            $scope.$on("validateEdit",function()
            {
                $scope.editMode = false;
            });

        }
    ]
);
