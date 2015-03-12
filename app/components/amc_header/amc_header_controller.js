angular.module('amCompanion').controller('AmcHeaderController',
    function($scope,$timeout, RoutesService){

        'use strict';
        this.cancelColor = "#FFFFFF";
        this.backColor = "#FFFFFF";
        this.editColor = "#FFFFFF";
        this.validateColor = "#FFFFFF";

        /**
         * Cette fonction déconnecte l'utilisateur
         */
        this.disconnect = function()
        {
            RoutesService.disconnect();
        };

        this.goBack = function()
        {
            this.goBackHandler();
            this.backColor = "#2980b9";
            $timeout(function(){$scope.backColor = "#FFFFFF";},100);
        };

        this.toggleEditMode = function()
        {
            $scope.$emit("startEdit");
            this.editColor = "#2980b9";
            $timeout(function(){$scope.editColor = "#FFFFFF";},100);
        };

        this.validateEditMode = function()
        {
            $scope.$emit("validateEdit");
            this.validateColor = "#2980b9";
            $timeout(function(){$scope.validateColor = "#FFFFFF";},100);
        };

        this.cancelEditMode = function()
        {
            $scope.$emit("cancelEdit");
            this.cancelColor = "#2980b9";
            $timeout(function(){$scope.cancelColor = "#FFFFFF";},100);
        };
    }
);
/* Controllers */
