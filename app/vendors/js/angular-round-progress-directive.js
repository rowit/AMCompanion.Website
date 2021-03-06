angular.module('angRoundProgress',[]);

angular.module('angRoundProgress').directive('angRoundProgress', [function () {
    'use strict';
    var compilationFunction = function (templateElement) {
        if (templateElement.length === 1) {
            var node = templateElement[0],
                width = node.getAttribute('round-progress-width') || '400',
                height = node.getAttribute('round-progress-height') || '400',
                canvas = document.createElement('canvas')
                ;

            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            canvas.setAttribute('round-progress-model', node.getAttribute('round-progress-model'));

            node.parentNode.replaceChild(canvas, node);

            var outerCircleWidth = node.getAttribute('round-progress-outer-circle-width') || '20';
            var innerCircleWidth = node.getAttribute('round-progress-inner-circle-width') || '5';

            var outerCircleBackgroundColor = node.getAttribute('round-progress-outer-circle-background-color') || '#505769';
            var outerCircleForegroundColor = node.getAttribute('round-progress-outer-circle-foreground-color') || '#12eeb9';
            var innerCircleColor = node.getAttribute('round-progress-inner-circle-color') || '#505769';
            var labelColor = node.getAttribute('round-progress-label-color') || '#12eeb9';

            var outerCircleRadius = node.getAttribute('round-progress-outer-circle-radius') || '100';
            var innerCircleRadius = node.getAttribute('round-progress-inner-circle-radius') || '70';

            var labelFont = node.getAttribute('round-progress-label-font') || '50pt Calibri';

            return {
                pre: function preLink(scope) {
                    var expression = canvas.getAttribute('round-progress-model');
                    scope.$watch(expression, function (newValue) {
                        // Create the content of the canvas
                        var ctx = canvas.getContext('2d'), x = width / 2, y = height / 2;
                        ctx.clearRect(0, 0, width, height);

                        // The "background" circle
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(outerCircleRadius), 0, Math.PI * 2, false);
                        ctx.lineWidth = parseInt(outerCircleWidth);
                        ctx.strokeStyle = outerCircleBackgroundColor;
                        ctx.stroke();

                        // The inner circle
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(innerCircleRadius), 0, Math.PI * 2, false);
                        ctx.lineWidth = parseInt(innerCircleWidth);
                        ctx.strokeStyle = innerCircleColor;
                        ctx.stroke();

                        // The inner number
                        ctx.font = labelFont;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = labelColor;
                        ctx.fillText(newValue.label + "%", x, y);

                        console.log(newValue.label);

                        // The "foreground" circle
                        var startAngle = - (Math.PI / 2);
                        var endAngle = ((Math.PI * 2 ) * newValue.percentage) - (Math.PI / 2);
                        var anticlockwise = false;
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(outerCircleRadius), startAngle, endAngle, anticlockwise);
                        ctx.lineWidth = parseInt(outerCircleWidth);
                        ctx.strokeStyle = outerCircleForegroundColor;
                        ctx.stroke();
                    }, true);
                }
            };
        }
    };

    var roundProgress = {
        compile: compilationFunction,
        replace: true
    };
    return roundProgress;
}]);
