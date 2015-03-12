angular.module('amCompanion').controller('FullLoginController',
    function($scope,$timeout,$location ,AuthService)
    {
        'use strict';

        /**
         * Cette méthode permet d'initialiser le bouton de connexion
         */
        $scope.resetButton = function()
        {
            $scope.buttonLabel = "Connexion";
            $scope.failed = false;
            $scope.success = false;
        };

        /**
         * Cette méthode redirige vers la page principale de l'application une fois connecté
         */
        $scope.redirectToHome = function ()
        {
            $location.path("/");
        };

        $scope.resetButton();

        /**
         * Cette fonction permet de connecter l'utilisateur
         */
        $scope.login = function()
        {
            $scope.loading = true;
            var promise = AuthService.login($scope.credentials);
            promise.then(function()
            {
                $scope.loading = false;
                $scope.success = true;
                $scope.buttonLabel = "Succès";

                $timeout($scope.redirectToHome, 1000);
            },function()
            {
                $scope.buttonLabel = "Echec de la connexion";
                $scope.failed = true;
                $scope.loading = false;

                $timeout($scope.resetButton, 2000);

            });

        };

    }
);
