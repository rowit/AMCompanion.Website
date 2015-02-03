amCompanion.directive('embedEmployee', function() {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: 'app/views/home/components/employee/employee.html',
        controller:"EmbedEmployeeController",
        scope:
        {
            employee:"="
        }
    };
});