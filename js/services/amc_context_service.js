amCompanion.factory("AmcContextService", [ "$http", "$rootScope","$q","urls","$cookies","$location","SweetAlert",
    function ($http, $rootScope, $q, urls, $cookies, $location, SweetAlert )
    {
        'use strict';

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
            data.updateStatus = 0;
        };
        //Init the context at the first injection
        this.initData();

        this.updateCurrentEmployee = function()
        {
            var defer = $q.defer();

            //data.updateStatus = 1;
            //$rootScope.$emit("serverUpdateStarted");

            $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
            $http.put(
                urls.employes + "/" +data.selectedEmployee.id,
                JSON.stringify(data.selectedEmployee)
            ).success(
                function (employee) {
                    //Update the user version
                    data.selectedEmployee._ts = employee._ts;
                    defer.resolve();
                }).error(function()
                {
                    //RoutesService.disconnect();
                    defer.reject();
                });
            return defer.promise;
        };

        /**
         * This method get the data from the stub
         */
        this.initEmployees = function ()
        {
            var defer = $q.defer();

            if( data.isInit === false )
            {
                defer = $q.defer();
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
                            //alert("data not loaded");
                        });
                }
                else
                {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
                    $http.get(
                        urls.employes + "/" +data.userMail
                    ).success(
                        function (res) {
                            addEmployeeDate(res);
                            data.employees.push.apply(data.employees , res);
                            data.isInit = true;
                            defer.resolve();

                        }).error(function(error,errorCode)
                        {
                            if( errorCode === 401)
                            {
                                SweetAlert.swal(
                                    {
                                        title: "Session expirée",
                                        text: "Votre session a expirée, veuillez vous reconnecter.",
                                        type: "error",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: true
                                    },
                                    function(){
                                        sessionStorage.removeItem("token");
                                        $location.path("/login");
                                        $rootScope.$apply();
                                    }
                                );
                            }
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
            var currentEmployee, currentMax = -1;

            for( var i = 0 ; i < employees.length ; i ++ )
            {
                currentMax = -1;
                currentEmployee = employees[i];
                for( var j = 0 ; j < currentEmployee.Links.length ; j ++ )
                {

                    //Premier retour du serveur quand les dates sont sous forme textuelles.
                    if(typeof currentEmployee.Links[j].Date === "string")
                    {
                        currentEmployee.Links[j].Date = Date.parse(currentEmployee.Links[j].Date);
                    }

                    if( currentEmployee.Links[j].Date > currentMax )
                    {
                        currentMax = currentEmployee.Links[j].Date;
                    }
                }
                currentEmployee.dateMax = currentMax;
            }
        }

        this.isDevVersion = function()
        {
            return $cookies.env === "dev";
        };

        //Accessor of employees
        this.getEmployees = function()
        {
            addEmployeeDate(data.employees);
            return data.employees;
        };

        this.getSelectedEmployee = function()
        {
            return data.selectedEmployee;
        };

        this.setSelectedEmployee = function( employee )
        {
            data.selectedEmployee = employee;
        };

        this.setSelectedEmployeeFromId = function( id )
        {
            for( var i = 0 ; i < data.employees.length ; i ++ )
            {
                if ( data.employees[i].id === id )
                {
                    this.setSelectedEmployee(data.employees[i]);
                }
            }
        };

        this.unsetSelectedEmployee = function()
        {
            data.selectedEmployee = undefined;
        };

        this.setUpdateStatus = function( newStatus )
        {
            data.updateStatus = newStatus;
        };

        this.getUpdateStatus = function()
        {
            return data.updateStatus;
        };


        return this;
    }]);
