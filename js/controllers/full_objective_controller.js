'use strict';

/* Controllers */
amCompanion.controller('FullObjectiveController',[
        "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService", function(
            $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService){

            $anchorScroll();
            $scope.editMode = true;
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
                    if( $routeParams.index == "new" )
                    {
                        $scope.selectedObjective = {
                            ProgressionPercent:0,
                            ponderation:0
                        };
                        $scope.newMode = true;
                        $scope.editMode = true;
                        $scope.nomPrenom = "Nouvel Objectif";
                    }
                    else
                    {
                        $scope.selectedObjective = $scope.selectedEmployee.CurrentObjectives[$routeParams.index];
                        $scope.selectedObjectiveBack = angular.copy($scope.selectedObjective);
                    }

                }
            )

            $scope.$on("cancelEdit",function()
            {
                if( $scope.newMode )
                {
                    $scope.goBack();
                }
                else
                {
                    $scope.selectedObjective.Text = $scope.selectedObjectiveBack.Text;
                    $scope.selectedObjective.ProgressionPercent = $scope.selectedObjectiveBack.ProgressionPercent;
                    $scope.selectedObjective.ponderation = $scope.selectedObjectiveBack.ponderation;
                    $scope.goBack();
                }

            });

            $scope.$on("validateEdit",function() {

                if ($scope.selectedObjective.Text == undefined) {
                    alert("Un intitulé est requis.");
                }
                else {

                    //If it's a new objective
                    if ($scope.newMode) {
                        $scope.selectedEmployee.CurrentObjectives.push($scope.selectedObjective);
                        AmcContextService.updateCurrentEmployee();
                    }
                    //If the new validated objectif is not the same as the original
                    else if( $scope.selectedObjective.Text != $scope.selectedObjectiveBack.Text ||
                        $scope.selectedObjective.ProgressionPercent != $scope.selectedObjectiveBack.ProgressionPercent ||
                        $scope.selectedObjective.ponderation != $scope.selectedObjectiveBack.ponderation )
                    {
                        AmcContextService.updateCurrentEmployee();
                    }
                    //Go back
                    $scope.goBack();
                }
            });

        }
    ]
);
