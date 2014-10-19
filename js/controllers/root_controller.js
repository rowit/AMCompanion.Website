
/* Controllers */
amCompanion.controller('RootController',[
    "$scope","$rootScope", "AmcContextService", function(
        $scope,$rootScope , AmcContextService){
        'use strict';
        $scope.updateStatus = AmcContextService.getUpdateStatus();

        $rootScope.$on("serverUpdateStarted",function(){
            $scope.updateStatus = AmcContextService.getUpdateStatus();
        });



    }]);
