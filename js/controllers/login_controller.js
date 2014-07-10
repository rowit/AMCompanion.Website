amCompanion.controller('LoginController',[ "$scope","AuthService", function($scope, AuthService)
{
    $scope.login = function()
    {
        $scope.loading = true;
        var promise = AuthService.login($scope.credentials);
        promise.then(function()
        {
            $scope.loading = false;
        },function()
        {
            $scope.loading = false;
        });

    };

}]);