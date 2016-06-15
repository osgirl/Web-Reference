/**
 * stwMasthead Directive
 * @namespace Directives
 */

'use strict';

function stwMasthead() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@title',
            image: '@icons'
        },
        template : require('./stwMasthead.html')
    };
}

let moduleName = 'stw.stwMasthead';

angular.module(moduleName, [])
    .directive('stwMasthead', stwMasthead);

export default moduleName;
