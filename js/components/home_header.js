'use strict';
amCompanion.directive('homeHeader', function() {
    return {
        restrict: 'E',
        controller:"HomeHeaderController",
        templateUrl: './partials/home_header.html'
    }
});

/* Controllers */
amCompanion.controller('HomeHeaderController', [ "$scope","$location" , function($scope, $location){

    /**
     * Cette fonction déconnecte l'utilisateur
     */
    $scope.disconnect = function()
    {
        sessionStorage.removeItem("token");
        $location.path("/login");
    }

}]);
