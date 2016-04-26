/**
 * Escape Filter
 * @namespace Filter
 */
'use strict';

    angular.module('styleguide.escape')
            .filter('escape', escape);

    function escape() {
        return window.encodeURIComponent;
    }

export default escape;

