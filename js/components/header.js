'use strict';
amCompanion.directive('amHeader', function() {
    return {
        restrict: 'E',
        controller:"HeaderController",
        templateUrl: './partials/header.html',
        scope:
        {
            mode:"@",
            goBackAction:"&"
        }
    }
});

/* Controllers */
amCompanion.controller('HeaderController', [ "$scope","$location" , function($scope, $location){

    /**
     * Cette fonction déconnecte l'utilisateur
     */
    $scope.disconnect = function()
    {
        sessionStorage.removeItem("token");
        $location.path("/login");
    }

    $scope.goBack = function()
    {
        console.log($scope.goBackAction);
        $scope.goBackAction();
    }

}]);
