/**
 * Created by Sébastien on 18/05/2014.
 */
amCompanion.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider.when('/', {
        id:"home",
        templateUrl: '/partials/full/home.html',
        controller: 'FullHomeController'
    });

    $routeProvider.when('/employee/:id', {
        id:"employee",
        templateUrl: '/partials/full/employee.html',
        controller: 'FullEmployeeController'
    });

    $routeProvider.when('/link/:id/:timestamp', {
        id:"link",
        templateUrl: '/partials/full/link.html',
        controller: 'FullLinkController'
    });

    $routeProvider.when('/objective/:id/:index', {
        id:"link",
        templateUrl: '/partials/full/objective.html',
        controller: 'FullObjectiveController'
    });

    $routeProvider.when('/login', {
        id:"login",
        templateUrl: '/partials/full/login.html',
        controller: 'FullLoginController'
    });

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});
}]);

amCompanion.run(["$rootScope", "$location","RoutesService",
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
    ]
);

