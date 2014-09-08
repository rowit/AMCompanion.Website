amCompanion.factory("AmcContextService", [ "$http","$q","urls",
    function( $http, $q, urls )
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


                /*
                $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
                $http.get(
                        urls.employes + "/sro@test.com"
                ).success(
                    function (res, status, headers ) {

                        data.employees.push.apply(data.employees , res);
                        data.isInit = true;
                        defer.resolve();

                    }).error(function()
                    {
                        defer.reject();
                    });
                */
                $http.get("/data/data.json").success(
                function (res, status, headers ) {
                    data.employees.push.apply(data.employees , res);
                    data.isInit = true;
                    defer.resolve();
                }).error(function()
                {
                    alert("data not loaded");
                });



            }
            else
            {
                defer.resolve();
            }

            return defer.promise;

        };

        //Accessor of employees
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
                if ( data.employees[i]._id == id )
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