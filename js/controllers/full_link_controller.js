'use strict';

/* Controllers */
amCompanion.controller('FullLinkController',[
    "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService", function(
        $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService){

        $anchorScroll();

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
        promise.then(function(){
            AmcContextService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
            $scope.nomPrenom = $scope.getName();
            var currentLink = undefined;
            for( var i = 0 ; i < $scope.selectedEmployee.Links.length ; i++ )
            {
                currentLink = $scope.selectedEmployee.Links[i];
                if( currentLink.date == $routeParams.timestamp )
                {
                    $scope.selectedLink = currentLink;
                }
            }

            if( $scope.selectedLink == undefined )
            {
                RoutesService.loadEmployeeView($scope.selectedEmployee);
            }

        })

    }]);
