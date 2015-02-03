/**
 * Created by Sébastien on 18/05/2014.
 */
amCompanion.config(function($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider.when('/', {
        id:"home",
        templateUrl: 'app/views/home/home.html',
        controller: 'FullHomeController'
    });

    $routeProvider.when('/employee/:id', {
        id:"employee",
        templateUrl: 'app/views/employee/employee.html',
        controller: 'FullEmployeeController'
    });

    $routeProvider.when('/link/:id/:timestamp', {
        id:"link",
        templateUrl: 'app/views/link/link.html',
        controller: 'FullLinkController'
    });

    $routeProvider.when('/objective/:id/:index', {
        id:"link",
        templateUrl: 'app/views/objective/objective.html',
        controller: 'FullObjectiveController'
    });

    $routeProvider.when('/login', {
        id:"login",
        templateUrl: 'app/views/login/login.html',
        controller: 'FullLoginController'
    });

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});
});

amCompanion.run(
    function ($rootScope, $location, RoutesService ) {
        'use strict';
        $rootScope.$on('$routeChangeStart', function (event, next, current) {

            var mainContainer = angular.element(document.getElementById("am-companion"));

            mainContainer.removeClass("slide-right-view");
            mainContainer.removeClass("slide-left-view");
            mainContainer.removeClass("fade-view");

            if( ( current === undefined ||
                current.$$route.id === "login" && next.$$route.id === "home" ) ||
                ( current.$$route.id === "home" && next.$$route.id === "login" )  )
            {
                mainContainer.addClass("fade-view");
            }
            else if( ( current.$$route.id === "home" && next.$$route.id === "employee" ) ||
                ( current.$$route.id === "employee" && next.$$route.id === "link" ) )
            {
                mainContainer.addClass("slide-right-view");
            }
            else
            {
                mainContainer.addClass("slide-left-view");
            }


            if( sessionStorage.getItem("token") === null )
            {
                RoutesService.disconnect();
            }

        });
    }

);

