angular.module('amCompanion').controller('FullLoginController',
    function($scope, $timeout,$location ,AuthService,RoutesService)
    {
        'use strict';
        var that = this;

        /**
         * Cette méthode permet d'initialiser le bouton de connexion
         */
        this.resetButton = function()
        {
            that.buttonLabel = "Connexion";
            that.failed = false;
            that.success = false;
        };

        /**
         * Cette méthode redirige vers la page principale de l'application une fois connecté
         */
        this.redirectToHome = function ()
        {
            RoutesService.loadHomeView();
        };

        this.resetButton();

        /**
         * Cette fonction permet de connecter l'utilisateur
         */
        this.login = function()
        {
            that.loading = true;
            var promise = AuthService.login(that.credentials);
            promise.then(function()
            {
                that.loading = false;
                that.success = true;
                that.buttonLabel = "Succès";
                $timeout(that.redirectToHome, 1000);
            },function()
            {
                that.buttonLabel = "Echec de la connexion";
                that.failed = true;
                that.loading = false;
                $timeout(that.resetButton, 2000);
            });

        };

    }
);
