amCompanion.factory("AmcContextService", [ "$http","$q","urls","$cookies",
    function( $http, $q, urls,$cookies )
    {

        var data = {};

        /**
         * This function is called to reset the service's data
         */
        this.initData = function()
        {
            data.employees = [];
            data.selectedEmployee = undefined;
            data.isInit = false;
            data.userMail = sessionStorage.getItem("mail");
        }
        //Init the context at the first injection
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


                if( this.isDevVersion() )
                {
                    $http.get("/data/data.json").success(
                        function ( res ) {
                            addEmployeeDate(res);
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
                    $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
                    $http.get(
                            urls.employes + "/" +data.userMail
                    ).success(
                        function (res, status, headers ) {

                            addEmployeeDate(res);

                            data.employees.push.apply(data.employees , res);
                            data.isInit = true;
                            defer.resolve();

                        }).error(function()
                        {
                            //RoutesService.disconnect();
                            defer.reject();
                        });
                }

            }
            else
            {
                defer.resolve();
            }
            return defer.promise;
        };

        /**
         * This function get the max date of the links and set it on the employee
         * @param employees the employee's list from the server
         */
        function addEmployeeDate( employees )
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
        }

        this.isDevVersion = function()
        {
            return $cookies.env == "dev";
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
