amCompanion.directive('amcHeader', function() {
    return {
        restrict: 'E',
        controller:"AmcHeaderController",
        templateUrl: './partials/utils/amc_header.html',
        scope:
        {
            homeDisplay:"=",
            libelle:"=",
            goBackHandler:"&",
            editMode:"="
        }
    }
});

/* Controllers */
amCompanion.controller('AmcHeaderController', [ "$scope","RoutesService" , function($scope, RoutesService){

    /**
     * Cette fonction déconnecte l'utilisateur
     */
    $scope.disconnect = function()
    {
        RoutesService.disconnect();
    }

    $scope.goBack = function()
    {
        $scope.goBackHandler();
    }

    $scope.toggleEditMode = function()
    {
        $scope.$emit("startEdit");
    }

    $scope.validateEditMode = function()
    {
        $scope.$emit("validateEdit");
    }

    $scope.cancelEditMode = function()
    {
        $scope.$emit("cancelEdit");
    }

}]);
