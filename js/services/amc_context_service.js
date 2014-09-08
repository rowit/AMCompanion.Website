amCompanion.factory("AmcContextService", [ "$http","$q","urls",
    function( $http, $q, urls )
    {

        var data = {};

        this.initData = function()
        {
            data.employees = [];
            data.selectedEmployee = undefined;
            data.isInit = false;
            data.userMail = sessionStorage.getItem("mail");
        }
        this.initData();

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


                $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
                $http.get(
                        urls.employes + "/" +data.userMail
                ).success(
                    function (res, status, headers ) {

                        sortEmployeesByDate(res);

                        data.employees.push.apply(data.employees , res);
                        data.isInit = true;
                        defer.resolve();

                    }).error(function()
                {
                        defer.reject();
                });

                /*
                $http.get("/data/data.json").success(
                function ( res ) {
                    sortEmployeesByDate(res);
                    data.employees.push.apply(data.employees , res);
                    data.isInit = true;
                    defer.resolve();
                }).error(function()
                {
                    alert("data not loaded");
                });
                */
            }
            else
            {
                defer.resolve();
            }
            return defer.promise;
        };

        function sortEmployeesByDate( employees )
        {
            var currentEmployee = undefined;
            var currentMax = -1;

            for( var i = 0 ; i < employees.length ; i ++ )
            {
                currentMax = -1;
                currentEmployee = employees[i];
                for( var j = 0 ; j < currentEmployee.Links.length ; j ++ )
                {
                    if( currentEmployee.Links[j].date > currentMax )
                    {
                        currentMax = currentEmployee.Links[j].date;
                    }
                }
                currentEmployee.dateMax = currentMax;
            }

            employees.sort(sortEmployees);
        }

        function sortEmployees( a, b)
        {
            return a.dateMax > b.dateMax;
        }

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