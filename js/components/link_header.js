'use strict';
amCompanion.directive('linkHeader', function() {
    return {
        restrict: 'E',
        controller:"LinkHeaderController",
        templateUrl: './partials/link_header.html'
    }
});

/* Controllers */
amCompanion.controller('LinkHeaderController', [ "$scope","$location" , function($scope, $location){

    $scope.goBack = function()
    {
        console.log($scope.goBackAction);
        $scope.goBackAction();
    }

}]);
