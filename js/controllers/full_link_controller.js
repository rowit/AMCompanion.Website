/* Controllers */
amCompanion.controller('FullLinkController',[
        "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService", "linkTypes","SweetAlert", function(
            $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService, linkTypes, SweetAlert){
            'use strict';

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
            };

            $scope.changeSelectedDate = function()
            {
                if( !!$scope.selectedDate )
                {
                    $scope.selectedLink.DateTimestamp = $scope.selectedDate.getTime();
                    $scope.selectedLink.Date = JSON.stringify($scope.selectedDate);
                }

            };

            $scope.getName = function()
            {
                var employee = AmcContextService.getSelectedEmployee();
                var str = "";
                if( employee !== undefined )
                {
                    str = employee.FirstName + " " + employee.LastName;
                }
                return str;
            };

            var promise = AmcContextService.initEmployees();
            promise.then(function(){

                    AmcContextService.setSelectedEmployeeFromId($routeParams.id);
                    $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
                    $scope.nomPrenom = $scope.getName();
                    var currentLink;

                    if( $routeParams.timestamp === "new" )
                    {
                        var date = new Date();

                        $scope.selectedLink = {
                            Type:undefined,
                            DateTimestamp: date.getTime(),
                            Date: JSON.stringify(date),
                            Comment:""
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
                            if( currentLink.DateTimestamp === parseInt($routeParams.timestamp) )
                            {
                                $scope.selectedLink = currentLink;
                                $scope.selectedLinkBackUp = angular.copy($scope.selectedLink);
                                $scope.selectedDate = new Date($scope.selectedLink.Date);
                                $scope.selectedDateTimestamp = new Date($scope.selectedLink.DateTimestamp);
                            }
                        }

                        if( $scope.selectedLink === undefined )
                        {
                            RoutesService.loadEmployeeView($scope.selectedEmployee);
                        }

                    }
                }
            );

            $scope.$on("cancelEdit",function()
            {
                if( $scope.newMode )
                {
                    $scope.goBack();
                }
                else
                {

                    $scope.selectedLink.Type = $scope.selectedLinkBackUp.Type;
                    $scope.selectedLink.Date = $scope.selectedLinkBackUp.Date;
                    $scope.selectedLink.DateTimestamp = $scope.selectedLinkBackUp.DateTimestamp;
                    $scope.selectedLink.Comment = $scope.selectedLinkBackUp.Comment;
                    $scope.goBack();
                }

            });

            $scope.$on("validateEdit",function() {

                if( $scope.selectedLink.Date === undefined) {
                    SweetAlert.error("","Une date valide est requise");
                }
                else if( $scope.selectedLink.Type === undefined )
                {
                    SweetAlert.error("","Un lieu est requis");
                }
                else {

                    //If it's a new objective
                    if ($scope.newMode) {
                        $scope.selectedEmployee.Links.push($scope.selectedLink);
                        AmcContextService.updateCurrentEmployee();
                    }
                    //If the new validated objectif is not the same as the original
                    else if( $scope.selectedLink.Type !== $scope.selectedLinkBackUp.Type ||
                        $scope.selectedLink.DateTimestamp !== $scope.selectedLinkBackUp.DateTimestamp ||
                        $scope.selectedLink.Comment !== $scope.selectedLinkBackUp.Comment )
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
