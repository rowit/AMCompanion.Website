'use strict';

/* Controllers */
amCompanion.controller('LinkController',[
    "$scope","$routeParams","$location","EmployeesService", function(
        $scope,$routeParams,$location,EmployeesService){

        var promise = EmployeesService.initEmployees();
        promise.then(function(){
            EmployeesService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = EmployeesService.getSelectedEmployee();

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
                $location.path("/employee/" + $scope.selectedEmployee.Id)
            }

        })

    }]);
