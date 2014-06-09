'use strict';

/* Controllers */
amCompanion.controller('HomeController',[ "$scope","USER_ROLES","AuthService","$http", function(
                                                            $scope,
                                                            USER_ROLES,
                                                            AuthService,
                                                            $http ){

    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $http.get("http://amcompanion.azurewebsites.net/api/v1/help/", {
        headers: {
            'Content-type': 'application/json'
        }
    }).success(function (data) {
        /*
        console.log(data);
        console.log("Appel Serveur OK ! :)");
        */
    }).error(function()
    {
        console.log("website params not loaded :(");
    });;

}]);
