amCompanion.factory('AuthService', ["$http", "Session" , "$location","$q", "urls",
    function ($http, Session , $location, $q, urls) {
        return {
            login: function (credentials){

                var defer = $q.defer();
                var data = {Email:credentials.email,Password:credentials.password};

                $http.post(
                    urls.login, data
                ).success(function (data, status, headers ) {
                        Session.create(data.Id, data.FirstName + " " + data.LastName , data.Profile);
                        sessionStorage.setItem("token", data.token);
                        defer.resolve("Login correct");
                    }).error(function()
                    {
/*
                         Session.create("fakeID", "Fake Fake" , "User");
                         sessionStorage.setItem("token", "thetokenbidon");
                         defer.resolve("Login correct");
*/
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