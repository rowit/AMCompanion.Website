amCompanion.factory('AuthService', ["$http", "$q", "urls", "AmcContextService",
    function ($http , $q, urls, AmcContextService) {
        return {
            login: function (credentials){

                var defer = $q.defer();
                var data = {Email:credentials.email,Password:credentials.password};

                $http.post(
                    urls.login, data
                ).success(
                    function ( data )
                    {
                        sessionStorage.setItem("token", data.token);
                        sessionStorage.setItem("mail", credentials.email);
                        AmcContextService.initData();
                        defer.resolve("Login correct");
                    }).error(
                    function(){
                        /*
                        sessionStorage.setItem("token", data.token);
                        sessionStorage.setItem("mail", credentials.email);
                        AmcContextService.initData();
                        defer.resolve("Login correct");
                        */

                        defer.reject("Login Incorrect");
                    }
                );

                return defer.promise;
            }
        };
    }]);