
/* Controllers */
angular.module('amCompanion').controller('FullObjectiveController',
    function($scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService, SweetAlert){

        var that = this;

        $anchorScroll();
        this.editMode = true;
        this.newMode = false;

        /**
         * This methods is passed in parameter to header, it allow to go back to employee view
         */
        this.goBack = function()
        {
            RoutesService.loadEmployeeView(that.selectedEmployee);
        };

        this.getName = function()
        {
            var employee = AmcContextService.getSelectedEmployee();
            var str = "";
            if( employee !== undefined )
            {
                str = employee.FirstName + " " + employee.LastName;
            }
            return str;
        };

        var promise = AmcContextService.initEmployees();
        promise.then(
            function()
            {
                AmcContextService.setSelectedEmployeeFromId($routeParams.id);
                that.selectedEmployee = AmcContextService.getSelectedEmployee();
                that.nomPrenom = that.getName();
                if( $routeParams.index === "new" )
                {
                    that.selectedObjective = {
                        ProgressionPercent:0,
                        ponderation:0
                    };
                    that.newMode = true;
                    that.editMode = true;
                    that.nomPrenom = "Nouvel Objectif";
                }
                else
                {
                    that.selectedObjective = that.selectedEmployee.Objectives[$routeParams.index];
                    that.selectedObjectiveBack = angular.copy(that.selectedObjective);
                }

            }
        );

        $scope.$on("cancelEdit",function()
        {
            if( that.newMode )
            {
                that.goBack();
            }
            else
            {
                that.selectedObjective.Text = that.selectedObjectiveBack.Text;
                that.selectedObjective.ProgressionPercent = that.selectedObjectiveBack.ProgressionPercent;
                that.selectedObjective.ponderation = that.selectedObjectiveBack.ponderation;
                that.goBack();
            }

        });

        $scope.$on("validateEdit",function() {

            if (that.selectedObjective.Text === undefined) {
                SweetAlert.error("","Un intitulé est requis.");
            }
            else {

                //If it's a new objective
                if (that.newMode) {
                    that.selectedEmployee.Objectives.push(that.selectedObjective);
                    AmcContextService.updateCurrentEmployee();
                }
                //If the new validated objectif is not the same as the original
                else if( that.selectedObjective.Text !== that.selectedObjectiveBack.Text ||
                    that.selectedObjective.ProgressionPercent !== that.selectedObjectiveBack.ProgressionPercent ||
                    that.selectedObjective.ponderation !== that.selectedObjectiveBack.ponderation )
                {
                    AmcContextService.updateCurrentEmployee();
                }
                //Go back
                that.goBack();
            }
        });

    }
);
