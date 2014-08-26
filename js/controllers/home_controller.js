'use strict';

/* Controllers */
amCompanion.controller('HomeController',[ "$scope","AuthService","EmployeesService", function(
                                                            $scope,
                                                            AuthService,
                                                            EmployeesService
                                                            ){


    EmployeesService.initEmployees();
    $scope.employees = EmployeesService.getEmployees();


}]);
