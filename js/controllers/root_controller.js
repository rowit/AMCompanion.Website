
/* Controllers */
amCompanion.controller('RootController',[
    "$scope","$rootScope", "AmcContextService", function(
        $scope,$rootScope , AmcContextService){
        'use strict';
        $scope.updateStatus = AmcContextService.getUpdateStatus();

        $rootScope.$on("serverUpdateStarted",function(){
            $scope.updateStatus = AmcContextService.getUpdateStatus();
        });

        $scope.closeNotif = function(){
            AmcContextService.setUpdateStatus(0);
            $scope.updateStatus = 0;
        };

        $scope.sendRapport = function(){
            window.location.href = "mailto:sebastien.romain@gmail.com;nicolas.wlodarczyk@outlook.com?" +
                                    "subject=AMC Fail report" +
                                    "&body=Here the error"
            ;
            AmcContextService.setUpdateStatus(0);
            $scope.updateStatus = 0;
        };

    }]);
