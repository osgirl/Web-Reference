/**
 * stwBackground Directive
 */

'use strict';

let moduleName = 'stwBackground';

function stwBackground() {
    require('./stwBackground.scss');
    return {
        restrict: 'E',
        replace: true,
        template: require('./stwBackground.html')
    };
}

angular.module(moduleName, [])
    .directive('stwBackground', stwBackground);

export default moduleName;
