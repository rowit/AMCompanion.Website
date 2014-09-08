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

        var promise = AmcContextService.initEmployees();
        promise.then(function(){
            AmcContextService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
            $scope.nomPrenom = $scope.getName();
            for ( var i = 0 ; i < $scope.selectedEmployee.CurrentObjectives.length ; i++ )
            {
                $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.CurrentObjectives[i].progressionPercent/100);
            }
        });

        $scope.getName = function()
        {
            var str = "";
            if( $scope.selectedEmployee != undefined )
            {
                str = $scope.selectedEmployee.FirstName + " " + $scope.selectedEmployee.LastName;
            }
            return str;
        }

        $scope.goBack = function()
        {
            RoutesService.loadHomeView();
        }

        $scope.showFullLink = function( link )
        {
            RoutesService.loadLinkView( $scope.selectedEmployee, link );
        }

        $scope.$on( "startEdit" , function()
        {
            $scope.selectedEmployeeEdited = angular.copy($scope.selectedEmployee);
            $scope.editMode = true;
        });

        $scope.$on("cancelEdit",function()
        {
            $scope.editMode = false;
        });

        $scope.$on("validateEdit",function()
        {
            $scope.editMode = false;
        });

    }]);
