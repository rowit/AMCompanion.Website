amCompanion.controller('LoginController',[ "$scope","AuthService", function($scope, AuthService)
{

    $scope.login = function()
    {
        AuthService.login($scope.credidentials);
    };

}]);