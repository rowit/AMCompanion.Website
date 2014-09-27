'use strict';

/* Controllers */
amCompanion.controller('FullLinkController',[
        "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService", "linkTypes", function(
            $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService, linkTypes){

            $anchorScroll();
            $scope.editMode = true;
            $scope.newMode = false;
            $scope.selectedDate = undefined;
            $scope.selectedLinkBackUp = undefined;

            $scope.linkTypes = linkTypes;

            /**
             * This methods is passed in parameter to header, it allow to go back to employee view
             */
            $scope.goBack = function()
            {
                RoutesService.loadEmployeeView($scope.selectedEmployee);
            }

            $scope.changeSelectedDate = function()
            {
                if( !!$scope.selectedDate )
                {
                    $scope.selectedLink.date = $scope.selectedDate.getTime();
                }

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
            promise.then(function(){
                    AmcContextService.setSelectedEmployeeFromId($routeParams.id);
                    $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
                    $scope.nomPrenom = $scope.getName();
                    var currentLink = undefined;

                    if( $routeParams.timestamp == "new" )
                    {
                        var date = new Date();

                        $scope.selectedLink = {
                            type:undefined,
                            date: date.getTime(),
                            comment:""
                        };
                        $scope.newMode = true;
                        $scope.editMode = true;
                        $scope.nomPrenom = "Nouveau rendez-vous";

                        $scope.selectedDate = date;
                    }
                    else
                    {
                        for( var i = 0 ; i < $scope.selectedEmployee.Links.length ; i++ )
                        {
                            currentLink = $scope.selectedEmployee.Links[i];
                            if( currentLink.date == $routeParams.timestamp )
                            {
                                $scope.selectedLink = currentLink;
                                $scope.selectedLinkBackUp = angular.copy($scope.selectedLink);
                                $scope.selectedDate = new Date($scope.selectedLink.date);
                            }
                        }

                        if( $scope.selectedLink == undefined )
                        {
                            RoutesService.loadEmployeeView($scope.selectedEmployee);
                        }

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
                    $scope.selectedLink.type = $scope.selectedLinkBackUp.type;
                    $scope.selectedLink.date = $scope.selectedLinkBackUp.date;
                    $scope.selectedLink.Comment = $scope.selectedLinkBackUp.Comment;
                    $scope.goBack();
                }

            });

            $scope.$on("validateEdit",function() {

                if( $scope.selectedLink.date == undefined) {
                    alert("Une date valide est requise");
                }
                else {

                    //If it's a new objective
                    if ($scope.newMode) {
                        $scope.selectedEmployee.Links.push($scope.selectedLink);
                        AmcContextService.updateCurrentEmployee();
                    }
                    //If the new validated objectif is not the same as the original
                    else if( $scope.selectedLink.type != $scope.selectedLinkBackUp.type ||
                        $scope.selectedLink.date != $scope.selectedLinkBackUp.date ||
                        $scope.selectedLink.Comment != $scope.selectedLinkBackUp.Comment )
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
