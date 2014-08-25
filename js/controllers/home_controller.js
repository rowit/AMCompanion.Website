'use strict';

/* Controllers */
amCompanion.controller('HomeController',[ "$scope","USER_ROLES","AuthService","EmployeesService", function(
                                                            $scope,
                                                            USER_ROLES,
                                                            AuthService,
                                                            EmployeesService
                                                            ){


    EmployeesService.initEmployees();
    $scope.employees = EmployeesService.getEmployees();


}]);
