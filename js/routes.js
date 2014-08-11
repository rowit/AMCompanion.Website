/**
 * Created by Sébastien on 18/05/2014.
 */
amCompanion.config(['$routeProvider',"USER_ROLES", function($routeProvider,USER_ROLES) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/employee/:id', {
        templateUrl: 'partials/employee_full.html',
        controller: 'EmployeeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
}]);

amCompanion.run(["$rootScope", "$location",
    function ($rootScope, $location ) {
    $rootScope.$on('$routeChangeStart', function (event, next) {

        if( sessionStorage.getItem("token") == undefined )
        {
            $location.path("/login");
        }

    });
}]);