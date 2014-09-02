/**
 * Created by Sébastien on 18/05/2014.
 */
amCompanion.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        id:"home",
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/employee/:id', {
        id:"employee",
        templateUrl: 'partials/employee_full.html',
        controller: 'EmployeeController'
    });

    $routeProvider.when('/link/:id/:timestamp', {
        id:"link",
        templateUrl: 'partials/link_full.html',
        controller: 'LinkController'
    });

    $routeProvider.when('/login', {
        id:"login",
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
}]);

amCompanion.run(["$rootScope", "$location",
    function ($rootScope, $location ) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {

            //var mainContainer = angular.element(document.getElementById("am-companion"))

            /*
            mainContainer.removeClass("slide-right-view");
            mainContainer.removeClass("slide-left-view");
            mainContainer.removeClass("fade-view");

            if( ( current == undefined
                ||  current.$$route.id == "login" && next.$$route.id == "home" )
                || ( current.$$route.id == "home" && next.$$route.id == "login" )  )
            {
                mainContainer.addClass("fade-view");
            }
            else if( ( current.$$route.id == "home" && next.$$route.id == "employee" ) ||
                ( current.$$route.id == "employee" && next.$$route.id == "link" ) )
            {
                mainContainer.addClass("slide-right-view");
            }
            else
            {
                mainContainer.addClass("slide-left-view");
            }
            */
            if( sessionStorage.getItem("token") == undefined )
            {
                $location.path("/login");
            }

        });
    }]);

