amCompanion.controller('LoginController',[ "$scope","AuthService", function($scope, AuthService)
{

    $scope.login = function()
    {
        console.log($scope.credentials);
        AuthService.login($scope.credentials);
    };

}]);