angular.module('amCompanion').directive('notificationToaster', function() {
    'use strict';
    return {
        restrict: 'E',
        bindToController:{
            updateStatus:'='
        },
        controller:"NotificationToasterController",
        controllerAs:"notificationController",
        templateUrl: '/app/components/notification_toaster/notification_toaster.html',
        scope:true
    };
});