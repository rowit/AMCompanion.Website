'use strict';
/* Services */
amCompanion.factory("Employees", function( $http )
{
    this.init = function()
    {
    }

    return this;

});

amCompanion.factory("EmployeesService", [ "$http", function( $http )
{
    var data = {};
    data.employees = [];
    data.links = [];

    this.initEmployees = function ()
    {
        $http.get('/data/data.json').then(function (res) {
            data.employees.push.apply(data.employees , res.data);
            angular.forEach(data.employees , function( employee )
            {
                data.links.push.apply(data.links, employee.Links);
            });
            console.log(data.employees);
        });
    };

    this.getEmployees = function()
    {
        return data.employees;
    };

    this.getLinks = function()
    {
        return data.links;
    };

    return this;
}]);

amCompanion.factory('AuthService', ["$http", "Session" , "$location","$q",
    function ($http, Session , $location, $q) {
        return {
            login: function (credentials){

                var defer = $q.defer();
                console.log(defer);
                var data = {Email:credentials.email,Password:credentials.password};
                //var data = {Email:"sm@mail.com",Password:"test"};
                $http.post(
                    "https://amcompanion.azurewebsites.net/amcAuth",
                    JSON.stringify(data),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ).success(function (data, status, headers ) {
                        Session.create(8, "romainseb", "admin");
                        sessionStorage.setItem("token", headers()["x-xsrf-token"]);
                        defer.resolve("Login correct");
                        //$location.path("/");
                    }).error(function()
                    {
                        defer.reject("Login Incorrect");
                    });

                return defer.promise;
            },
            isAuthenticated: function () {
                return !!Session.userId;
            },
            isAuthorized: function (authorizedRoles) {
                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }
                return (this.isAuthenticated() &&
                    authorizedRoles.indexOf(Session.userRole) !== -1);
            }
        };
    }]);

amCompanion.service('Session', [ "$cookies", function ( $cookies ) {
    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
        $cookies.amManager = angular.toJson(this);
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
        $cookies.amManager = angular.toJson(this);
    };
    this.fromJson = function( jsonObject )
    {
        var session = angular.fromJson( jsonObject );
        this.id = session.id;
        this.userId = session.userId;
        this.userRole = session.userRole;
        $cookies.amManager = angular.toJson(this);
    };

    return this;
}]);
