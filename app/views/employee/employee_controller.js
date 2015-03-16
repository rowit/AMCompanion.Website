/* Controllers */
angular.module('amCompanion').controller('FullEmployeeController',
    function( $scope,$routeParams, $anchorScroll ,AmcContextService, RoutesService, SweetAlert,moods){

        "use strict";

        var that = this;
        this.progressColors = [];
        this.editMode = false;
        this.selectedEmployeeEdited = undefined;
        this.nomPrenom = "";

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

        this.initColors = function()
        {
            var i;
            this.progressColors = [];
            for ( i = 0 ; i < this.selectedEmployee.Objectives.length ; i++ )
            {
                this.progressColors[i] = getColorForPercentage(this.selectedEmployee.Objectives[i].ProgressionPercent/100);
            }
        };

        //init the page's context
        var promise = AmcContextService.initEmployees();
        promise.then(function(){
            AmcContextService.setSelectedEmployeeFromId($routeParams.id);

            that.selectedEmployee = AmcContextService.getSelectedEmployee();
            that.nomPrenom = that.getName();
            that.nextEPDI = new Date( that.selectedEmployee.NextEPDI );
            that.moods = moods;
            that.initColors();
        });

        this.getIcon = function( type )
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
        this.getName = function()
        {
            var str = "";
            if( this.selectedEmployee !== undefined )
            {
                str = this.selectedEmployee.FirstName + " " + this.selectedEmployee.LastName;
            }
            return str;
        };

        /**
         * This function allow to return to the home page
         */
        this.goBack = function()
        {
            RoutesService.loadHomeView();
        };

        /**
         * This is what happened when a link is clicked
         * @param link
         */
        this.showFullLink = function( link )
        {
            if( this.editMode === false)
            {
                RoutesService.loadLinkView( this.selectedEmployee, link );
            }
        };

        this.createNewObjective = function()
        {
            if( this.editMode === false) {
                RoutesService.loadObjectiveView(this.selectedEmployee, "new");
            }
        };

        this.createNewLink = function()
        {
            if( this.editMode === false) {
                RoutesService.loadLinkView(this.selectedEmployee, {DateTimestamp:"new"});
            }
        };

        this.showFullObjective = function( $index )
        {
            if( this.editMode === false) {
                RoutesService.loadObjectiveView(this.selectedEmployee, $index);
            }
        };

        $scope.$on( "startEdit" , function()
        {
            that.selectedEmployeeBackUp = angular.copy(that.selectedEmployee);
            that.editMode = true;
        });

        $scope.$on("cancelEdit",function()
        {
            that.selectedEmployee = that.selectedEmployeeBackUp;
            that.editMode = false;
        });

        $scope.$on("validateEdit",function()
        {

            if( that.selectedEmployeeBackUp.Objectives.length !== that.selectedEmployee.Objectives.length ||
                that.selectedEmployeeBackUp.Links.length !== that.selectedEmployee.Links.length)
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
                        that.selectedEmployee.NextEPDI = that.nextEPDI;
                        AmcContextService.updateCurrentEmployee();
                        that.editMode = false;
                    });
            }
            else if ( that.nextEPDI.getTime() !== that.selectedEmployeeBackUp.NextEPDI ||
                that.selectedEmployee.Status !== that.selectedEmployeeBackUp.Status ){
                that.selectedEmployee.NextEPDI = that.nextEPDI.getTime();
                AmcContextService.updateCurrentEmployee();
                that.editMode = false;
            }
            else
            {
                that.editMode = false;
            }
        });

        this.deleteObjective = function($event, $index)
        {
            that.selectedEmployee.Objectives.splice($index, 1);
            $event.stopPropagation();
        };

        this.deleteLink = function($event, $index)
        {
            that.selectedEmployee.Links.splice($index, 1);
            $event.stopPropagation();
        };

    }
);
