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



    var data = {Email:"sm@mail.com",Password:"test"};
    $http.post(
        "http://amcompanion.azurewebsites.net/amcAuth",
        JSON.stringify(data),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).success(function (data, status, headers ) {
        sessionStorage.setItem("token", headers()["x-xsrf-token"]);
        console.log(data);
        console.log(sessionStorage.getItem("token"));
    }).error(function()
    {
        console.log("website params not loaded :(");
    });


}]);
