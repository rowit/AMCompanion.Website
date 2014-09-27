'use strict';

/* Controllers */
amCompanion.controller('FullEmployeeController',[
    "$scope","$routeParams","$anchorScroll","AmcContextService","RoutesService", function(
        $scope,$routeParams, $anchorScroll ,AmcContextService, RoutesService){

        $scope.progressColors = [];
        $scope.editMode = false;
        $scope.selectedEmployeeEdited = undefined;
        $scope.nomPrenom = "";

        $anchorScroll();

        //init the page's context
        var promise = AmcContextService.initEmployees();
        promise.then(function(){
            AmcContextService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
            $scope.nomPrenom = $scope.getName();
            initColors();
        });

        function initColors()
        {
            $scope.progressColors = [];
            for ( var i = 0 ; i < $scope.selectedEmployee.CurrentObjectives.length ; i++ )
            {
                $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.CurrentObjectives[i].progressionPercent/100);
            }
        }

        /**
         * get the name of the employee clicked
         * @returns {string}
         */
        $scope.getName = function()
        {
            var str = "";
            if( $scope.selectedEmployee != undefined )
            {
                str = $scope.selectedEmployee.FirstName + " " + $scope.selectedEmployee.LastName;
            }
            return str;
        }

        /**
         * This function allow to return to the home page
         */
        $scope.goBack = function()
        {
            RoutesService.loadHomeView();
        }

        /**
         * This is what happened when a link is clicked
         * @param link
         */
        $scope.showFullLink = function( link )
        {
            if( $scope.editMode == false)
            {
                RoutesService.loadLinkView( $scope.selectedEmployee, link );
            }
        }

        $scope.createNewObjective = function()
        {
            if( $scope.editMode == false) {
                RoutesService.loadObjectiveView($scope.selectedEmployee, "new");
            }
        }

        $scope.createNewLink = function()
        {
            if( $scope.editMode == false) {
                RoutesService.loadLinkView($scope.selectedEmployee, {date:"new"});
            }
        }

        $scope.showFullObjective = function( $index )
        {
            if( $scope.editMode == false) {
                RoutesService.loadObjectiveView($scope.selectedEmployee, $index);
            }
        }

        $scope.$on( "startEdit" , function()
        {
            $scope.selectedEmployeeBackUp = angular.copy($scope.selectedEmployee);
            $scope.editMode = true;
        });

        $scope.$on("cancelEdit",function()
        {
            $scope.selectedEmployee = $scope.selectedEmployeeBackUp;
            $scope.editMode = false;
        });

        $scope.$on("validateEdit",function()
        {
            $scope.editMode = false;
            AmcContextService.updateCurrentEmployee();
        });

        $scope.deleteObjective = function($event, $index)
        {
            $scope.selectedEmployee.CurrentObjectives.splice($index, 1);
            $event.stopPropagation();
        }

        $scope.deleteLink = function($event, $index)
        {
            $scope.selectedEmployee.Links.splice($index, 1);
            $event.stopPropagation();
        }

    }]);
