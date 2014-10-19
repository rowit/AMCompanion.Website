amCompanion.directive('amcHeader', function() {
    'use strict';
    return {
        restrict: 'E',
        controller:"AmcHeaderController",
        templateUrl: '/partials/utils/amc_header.html',
        scope:
        {
            homeDisplay:"=",
            libelle:"=",
            goBackHandler:"&",
            editMode:"="
        }
    };
});

/* Controllers */
amCompanion.controller('AmcHeaderController',
    [ "$scope","$timeout","RoutesService" ,
        function($scope,$timeout, RoutesService){

            'use strict';
            $scope.cancelColor = "#FFFFFF";
            $scope.backColor = "#FFFFFF";
            $scope.editColor = "#FFFFFF";
            $scope.validateColor = "#FFFFFF";

            /**
             * Cette fonction déconnecte l'utilisateur
             */
            $scope.disconnect = function()
            {
                RoutesService.disconnect();
            };

            $scope.goBack = function()
            {
                $scope.goBackHandler();
                $scope.backColor = "#2980b9";
                $timeout(function(){$scope.backColor = "#FFFFFF";},100);
            };

            $scope.toggleEditMode = function()
            {
                $scope.$emit("startEdit");
                $scope.editColor = "#2980b9";
                $timeout(function(){$scope.editColor = "#FFFFFF";},100);
            };

            $scope.validateEditMode = function()
            {
                $scope.$emit("validateEdit");
                $scope.validateColor = "#2980b9";
                $timeout(function(){$scope.validateColor = "#FFFFFF";},100);
            };

            $scope.cancelEditMode = function()
            {
                $scope.$emit("cancelEdit");
                $scope.cancelColor = "#2980b9";
                $timeout(function(){$scope.cancelColor = "#FFFFFF";},100);
            };

        }]);
