/**
 * Escape Filter
 * @namespace Filter
 */
'use strict';

    angular.module('stw.escape')
            .filter('escape', escape);

    function escape() {
        return window.encodeURIComponent;
    }

export default escape;

