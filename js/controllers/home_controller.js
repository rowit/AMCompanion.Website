'use strict';

/* Controllers */
amCompanion.controller('HomeController',[ "$scope","USER_ROLES","AuthService","EmployeesService", function(
                                                            $scope,
                                                            USER_ROLES,
                                                            AuthService,
                                                            EmployeesService ){

    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    EmployeesService.initEmployees();
    console.log(EmployeesService.getEmployees());
    /*
    $http.get("http://amcompanion.azurewebsites.net/api/v1/help/", {
        headers: {
            'Content-type': 'application/json'
        }
    }).success(function (data) {
        console.log(data);
        console.log("Appel Serveur OK ! :)");
    }).error(function()
    {
        console.log("website params not loaded :(");
    });
    */

}]);
