'use strict';

/* Controllers */
amCompanion.controller('HomeController',[ "$scope","USER_ROLES","AuthService","EmployeesService","$http", function(
                                                            $scope,
                                                            USER_ROLES,
                                                            AuthService,
                                                            EmployeesService,
                                                            $http){

    /*
    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;
    */


    EmployeesService.initEmployees();
    $scope.links = EmployeesService.getLinks();
    $scope.employees = EmployeesService.getEmployees();

}]);
