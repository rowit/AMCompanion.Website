/*
 * Angular matchMedia Module
 * Version 0.2.0
 * Uses Bootstrap 3 breakpoint sizes
 * Exposes service "screenSize" which returns true if breakpoint(s) matches.
 * Includes matchMedia polyfill for backward compatibility.
 * Copyright © 2013-2014 Jack Tarantino.
 **/

angular.module('matchMedia', [])


    .run(function () {
        /*! matchMedia() polyfill - Test a CSS media type/query in JS.
         * Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight.
         * Dual MIT/BSD license
         **/

        window.matchMedia || (window.matchMedia = function() {
            "use strict";

            // For browsers that support matchMedium api such as IE 9 and webkit
            var styleMedia = (window.styleMedia || window.media);

            // For those that don't support matchMedium
            if (!styleMedia) {
                var style       = document.createElement('style'),
                    script      = document.getElementsByTagName('script')[0],
                    info        = null;

                style.type  = 'text/css';
                style.id    = 'matchmediajs-test';

                script.parentNode.insertBefore(style, script);

                // 'style.currentStyle' is used by IE <= 8
                // 'window.getComputedStyle' for all other browsers
                info = ('getComputedStyle' in window)
                    && window.getComputedStyle(style, null)
                    || style.currentStyle;

                styleMedia = {
                    matchMedium: function(media) {
                        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                        // 'style.styleSheet' is used by IE <= 8
                        // 'style.textContent' for all other browsers
                        if (style.styleSheet) {
                            style.styleSheet.cssText = text;
                        } else {
                            style.textContent = text;
                        }

                        // Test if media query is true or false
                        return info.width === '1px';
                    }
                };
            }

            return function(media) {
                return {
                    matches: styleMedia.matchMedium(media || 'all'),
                    media: media || 'all'
                };
            };
        }());
    })


// takes a comma-separated list of screen sizes to match.
// returns true if any of them match.
    .service('screenSize', function () {
        'use strict';

        var defaultRules = {
            lg : '(min-width: 1200px)',
            md : '(min-width: 992px) and (max-width: 1199px)',
            sm : '(min-width: 768px) and (max-width: 991px)',
            xs : '(max-width: 767px)'
        };

        this.is = function (list) {
            var rules = this.rules || defaultRules;

            // validate that we're getting a string or array.
            if (typeof list !== 'string' && typeof list !== 'array') {
                throw new Error('screenSize requires array or comma-separated list');
            }

            // if it's a string, convert to array.
            if (typeof list === 'string') {
                list = list.split(/\s*,\s*/);
            }

            return list.some(function (size, index, arr) {
                if ( window.matchMedia(rules[size]).matches ) {
                    return true;
                }
            });
        };
    });
