/**
 * Created by Sébastien on 18/05/2014.
 */

amCompanion.config(['$routeProvider',"USER_ROLES", function($routeProvider,USER_ROLES) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController',
        data:{
            authorizedRoles:[USER_ROLES.admin, USER_ROLES.editor]
        }
    });

    $routeProvider.when('/settings', {templateUrl: '../partials/settings.html', controller: 'SettingsController'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);

amCompanion.run(function ($rootScope, AUTH_EVENTS, AuthService) {
    $rootScope.$on('$routeChangeStart', function (event, next) {

        var authorizedRoles = next.data.authorizedRoles;
        if (!AuthService.isAuthorized(authorizedRoles)) {
            event.preventDefault();
            if (AuthService.isAuthenticated()) {
                // user is not allowed
                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            } else {
                // user is not logged in
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
        }
    });
})

amCompanion.config(function ($httpProvider) {
    $httpProvider.interceptors.push([
        '$injector',
        function ($injector) {
            return $injector.get(‘AuthInterceptor’);
        }
    ]);
})

amCompanion.factory(‘AuthInterceptor’, function ($rootScope, $q,
                                          AUTH_EVENTS) {
    return {
        responseError: function (response) {
            if (response.status === 401) {
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated,
                    response);
            }
            if (response.status === 403) {
                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized,
                    response);
            }
            if (response.status === 419 || response.status === 440) {
                $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout,
                    response);
            }
            return $q.reject(response);
        }
    };
})