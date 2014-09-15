amCompanion.factory("RoutesService",
    ["$location","AmcContextService",
        function( $location, AmcContextService )
        {
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
                $location.path("/employee/" + employee._id);
            };

            this.loadLinkView = function( employee, link )
            {
                $location.path("/link/"+employee._id+"/"+link.date);
            };

            this.loadObjectiveView = function( employee, index )
            {
                $location.path("/objective/"+employee._id+"/"+index);
            };

            return this;
        }
    ]
);