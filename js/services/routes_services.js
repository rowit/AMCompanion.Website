amCompanion.factory("RoutesService",
    ["$location","AmcContextService",
        function( $location, AmcContextService )
        {
            'use strict';

            this.disconnect = function ()
            {
                sessionStorage.removeItem("token");
                $location.path("/login");
            };

            this.loadHomeView = function()
            {
                $location.path("/");
                AmcContextService.unsetSelectedEmployee();
            };

            this.loadEmployeeView = function( employee )
            {
                AmcContextService.unsetSelectedEmployee();
                $location.path("/employee/" + employee.id);
            };

            this.loadLinkView = function( employee, link )
            {
                $location.path("/link/"+employee.id+"/"+link.DateTimestamp);
            };

            this.loadObjectiveView = function( employee, index )
            {
                $location.path("/objective/"+employee.id+"/"+index);
            };

            return this;
        }
    ]
);
