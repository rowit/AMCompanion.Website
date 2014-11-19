/* Controllers */
amCompanion.controller('FullEmployeeController',[
    "$scope","$routeParams","$anchorScroll","AmcContextService","RoutesService","SweetAlert", function(
        $scope,$routeParams, $anchorScroll ,AmcContextService, RoutesService, SweetAlert){

        "use strict";

        $scope.progressColors = [];
        $scope.editMode = false;
        $scope.selectedEmployeeEdited = undefined;
        $scope.nomPrenom = "";

        $anchorScroll();

        /**
         * This function set the percent of colors to make the gradient red to green
         * @type {{pct: number, color: {r: number, g: number, b: number}}[]}
         */
        var percentColors = [
            { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
            { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
            { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];

        /**
         * This function allow to get the color from red to green with a percentage
         * @param pct the percentage
         * @returns {string} the color #EXAEXA
         */
        function getColorForPercentage(pct) {
            for (var i = 1; i < percentColors.length - 1; i++) {
                if (pct < percentColors[i].pct) {
                    break;
                }
            }
            var lower = percentColors[i - 1];
            var upper = percentColors[i];
            var range = upper.pct - lower.pct;
            var rangePct = (pct - lower.pct) / range;
            var pctLower = 1 - rangePct;
            var pctUpper = rangePct;
            var color = {
                r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
                g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
                b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
            };
            //return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
            return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
            // or output as hex if preferred
        }

        /**
         * This function allow to get the exa code for a color.
         * @param c
         * @returns {string}
         */
        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }

        function initColors()
        {
            var i;
            $scope.progressColors = [];
            for ( i = 0 ; i < $scope.selectedEmployee.Objectives.length ; i++ )
            {
                $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.Objectives[i].ProgressionPercent/100);
            }
        }

        //init the page's context
        var promise = AmcContextService.initEmployees();
        promise.then(function(){
            AmcContextService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
            $scope.nomPrenom = $scope.getName();
            initColors();
        });

        $scope.getIcon = function( type )
        {
            var icon;

            if( type === "Mail" )
            {
                icon = "fa-envelope-o";
            }
            else if ( type === "Restaurant" )
            {
                icon = "fa-cutlery";
            }
            else if ( type === "Appel" )
            {
                icon = "fa-phone";
            }
            else if ( type === "Café" )
            {
                icon = "fa-coffee";
            }
            else if ( type === "Entretien" )
            {
                icon = "fa-calendar";
            }


            return icon;
        };

        /**
         * get the name of the employee clicked
         * @returns {string}
         */
        $scope.getName = function()
        {
            var str = "";
            if( $scope.selectedEmployee !== undefined )
            {
                str = $scope.selectedEmployee.FirstName + " " + $scope.selectedEmployee.LastName;
            }
            return str;
        };

        /**
         * This function allow to return to the home page
         */
        $scope.goBack = function()
        {
            RoutesService.loadHomeView();
        };

        /**
         * This is what happened when a link is clicked
         * @param link
         */
        $scope.showFullLink = function( link )
        {
            if( $scope.editMode === false)
            {
                RoutesService.loadLinkView( $scope.selectedEmployee, link );
            }
        };

        $scope.createNewObjective = function()
        {
            if( $scope.editMode === false) {
                RoutesService.loadObjectiveView($scope.selectedEmployee, "new");
            }
        };

        $scope.createNewLink = function()
        {
            if( $scope.editMode === false) {
                RoutesService.loadLinkView($scope.selectedEmployee, {Date:"new"});
            }
        };

        $scope.showFullObjective = function( $index )
        {
            if( $scope.editMode === false) {
                RoutesService.loadObjectiveView($scope.selectedEmployee, $index);
            }
        };

        $scope.$on( "startEdit" , function()
        {
            $scope.selectedEmployeeBackUp = angular.copy($scope.selectedEmployee);
            $scope.editMode = true;
        });

        $scope.$on("cancelEdit",function()
        {
            $scope.selectedEmployee = $scope.selectedEmployeeBackUp;
            $scope.editMode = false;
        });

        $scope.$on("validateEdit",function()
        {
            if( $scope.selectedEmployeeBackUp.Objectives.length !== $scope.selectedEmployee.Objectives.length ||
                $scope.selectedEmployeeBackUp.Links.length !== $scope.selectedEmployee.Links.length)
            {
                SweetAlert.swal({
                        title: "Êtes vous sûr ?",
                        text: "Voulez vous supprimer ces données ?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",confirmButtonText: "Oui",
                        cancelButtonText: "Annuler",
                        closeOnConfirm: true,
                        closeOnCancel: true},
                    function(){
                        AmcContextService.updateCurrentEmployee();
                        $scope.editMode = false;
                    });
            }
            else
            {
                $scope.editMode = false;
            }
        });

        $scope.deleteObjective = function($event, $index)
        {
            $scope.selectedEmployee.Objectives.splice($index, 1);
            $event.stopPropagation();
        };

        $scope.deleteLink = function($event, $index)
        {
            $scope.selectedEmployee.Links.splice($index, 1);
            $event.stopPropagation();
        };

    }]);
