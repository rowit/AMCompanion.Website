amCompanion.factory('AuthService',
    function ($http , $q, urls, AmcContextService) {
        'use strict';
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

                        if(AmcContextService.isDevVersion())
                        {
                            sessionStorage.setItem("token", data.token);
                            sessionStorage.setItem("mail", credentials.email);
                            AmcContextService.initData();
                            defer.resolve("Login correct");
                        }

                        defer.reject("Login Incorrect");
                    }
                );

                return defer.promise;
            }
        };
    }
);
