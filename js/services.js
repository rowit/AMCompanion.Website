'use strict';
/* Services */
amCompanion.factory("EmployeesService", [ "$http","$q", function( $http, $q )
{
    var data = {};
    data.employees = [];
    data.selectedEmployee = undefined;
    data.isInit = false;

    /**
     * This method get the data from the stub
     */
    this.initEmployees = function ()
    {
        var defer = $q.defer();

        if( data.isInit == false )
        {
            var defer = $q.defer();
            data.employees = [];

            $http.get('/data/data.json').then(function (res) {
                data.employees.push.apply(data.employees , res.data);
                data.isInit = true;
                defer.resolve();
            });
        }
        else
        {
            defer.resolve();
        }

        return defer.promise;

    };

    this.getEmployees = function()
    {
        return data.employees;
    };

    this.getSelectedEmployee = function()
    {
        return data.selectedEmployee;
    }

    this.setSelectedEmployee = function( employee )
    {
        data.selectedEmployee = employee;
    }

    this.setSelectedEmployeeFromId = function( id )
    {
        for( var i = 0 ; i < data.employees.length ; i ++ )
        {
            if ( data.employees[i].Id == id )
            {
                this.setSelectedEmployee(data.employees[i]);
            }
        }
    }

    this.unsetSelectedEmployee = function()
    {
        data.selectedEmployee = undefined;
    }

    return this;
}]);

amCompanion.factory('AuthService', ["$http", "Session" , "$location","$q", "urls",
    function ($http, Session , $location, $q, urls) {
        return {
            login: function (credentials){

                var defer = $q.defer();
                var data = {Email:credentials.email,Password:credentials.password};
                $http.post(
                    urls.AuthApi,
                    JSON.stringify(data),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ).success(function (data, status, headers ) {
                        Session.create(data.Id, data.FirstName + " " + data.LastName , data.Profile);
                        sessionStorage.setItem("token", headers()["x-xsrf-token"]);
                        defer.resolve("Login correct");
                    }).error(function()
                    {

                        Session.create("fakeID", "Fake Fake" , "User");
                        sessionStorage.setItem("token", "thetokenbidon");
                        defer.resolve("Login correct");

                        //To decomment to have the normal way :)
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

amCompanion.service('Session',function () {

    this.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };
    this.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };
    this.fromJson = function( jsonObject )
    {
        var session = angular.fromJson( jsonObject );
        this.id = session.id;
        this.userId = session.userId;
        this.userRole = session.userRole;
    };

    return this;
});
