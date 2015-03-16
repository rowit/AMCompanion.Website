angular.module('amCompanion').controller('NotificationToasterController',
    function( $rootScope , AmcContextService ){

        this.updateStatus = AmcContextService.getUpdateStatus();
        var that = this;

        $rootScope.$on("serverUpdateStarted",function(){
            that.updateStatus = AmcContextService.getUpdateStatus();
        });

        this.closeNotif = function(){
            AmcContextService.setUpdateStatus(0);
            this.updateStatus = 0;
        };

        this.sendRapport = function(){
            window.location.href = "mailto:sebastien.romain@gmail.com;nicolas.wlodarczyk@outlook.com?" +
            "subject=AMC Fail report" +
            "&body=Here the error"
            ;
            AmcContextService.setUpdateStatus(0);
            this.updateStatus = 0;
        };

    }
);
