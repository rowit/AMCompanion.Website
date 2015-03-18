/* Controllers */
angular.module('amCompanion').controller('FullLinkController',
    function( $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService, linkTypes, SweetAlert){
        'use strict';

        var that = this;

        $anchorScroll();
        this.editMode = true;
        this.newMode = false;
        this.selectedDate = undefined;
        this.selectedLinkBackUp = undefined;

        this.linkTypes = linkTypes;

        /**
         * This methods is passed in parameter to header, it allow to go back to employee view
         */
        this.goBack = function()
        {
            RoutesService.loadEmployeeView(that.selectedEmployee);
        };

        this.changeSelectedDate = function()
        {
            if( !!that.selectedDate )
            {
                that.selectedLink.DateTimestamp = that.selectedDate.getTime();
                that.selectedLink.Date = JSON.stringify(that.selectedDate);
            }

        };

        this.getName = function()
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
                that.selectedEmployee = AmcContextService.getSelectedEmployee();
                that.nomPrenom = that.getName();
                var currentLink;

                if( $routeParams.timestamp === "new" )
                {
                    var date = new Date();

                    that.selectedLink = {
                        Type:undefined,
                        DateTimestamp: date.getTime(),
                        Date: JSON.stringify(date),
                        Comment:""
                    };
                    that.newMode = true;
                    that.editMode = true;
                    that.nomPrenom = "Nouveau rendez-vous";

                    that.selectedDate = date;
                }
                else
                {
                    for( var i = 0 ; i < that.selectedEmployee.Links.length ; i++ )
                    {
                        currentLink = that.selectedEmployee.Links[i];
                        if( currentLink.DateTimestamp === parseInt($routeParams.timestamp) )
                        {
                            that.selectedLink = currentLink;
                            that.selectedLinkBackUp = angular.copy(that.selectedLink);
                            that.selectedDate = new Date(that.selectedLink.Date.slice(1,25));
                            that.selectedDateTimestamp = new Date(that.selectedLink.DateTimestamp);
                        }
                    }

                    if( that.selectedLink === undefined )
                    {
                        RoutesService.loadEmployeeView(that.selectedEmployee);
                    }

                }
            }
        );

        $scope.$on("cancelEdit",function()
        {
            if( that.newMode )
            {
                that.goBack();
            }
            else
            {

                that.selectedLink.Type = that.selectedLinkBackUp.Type;
                that.selectedLink.Date = that.selectedLinkBackUp.Date;
                that.selectedLink.DateTimestamp = that.selectedLinkBackUp.DateTimestamp;
                that.selectedLink.Comment = that.selectedLinkBackUp.Comment;
                that.goBack();
            }

        });

        $scope.$on("validateEdit",function() {

            if( that.selectedLink.Date === undefined) {
                SweetAlert.error("","Une date valide est requise");
            }
            else if( that.selectedLink.Type === undefined )
            {
                SweetAlert.error("","Un lieu est requis");
            }
            else {

                //If it's a new objective
                if (that.newMode) {
                    that.selectedEmployee.Links.push(that.selectedLink);
                    AmcContextService.updateCurrentEmployee();
                }
                //If the new validated objectif is not the same as the original
                else if( that.selectedLink.Type !== that.selectedLinkBackUp.Type ||
                    that.selectedLink.DateTimestamp !== that.selectedLinkBackUp.DateTimestamp ||
                    that.selectedLink.Comment !== that.selectedLinkBackUp.Comment )
                {
                    AmcContextService.updateCurrentEmployee();
                }
                //Go back
                that.goBack();
            }
        });
    }
);
