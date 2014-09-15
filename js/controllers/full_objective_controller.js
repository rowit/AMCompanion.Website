'use strict';

/* Controllers */
amCompanion.controller('FullObjectiveController',[
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
            $scope.selectedObjective = $scope.selectedEmployee.CurrentObjectives[$routeParams.index];
            console.log( $scope.selectedObjective );
        })

    }]);
