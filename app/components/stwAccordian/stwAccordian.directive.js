/**
 * stwAccordian Directive
 * @namespace Directives
 */

'use strict';

function stwAccordian() {
    require('./stwAccordian.scss');
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, element) {

            var open = false;

            element.on('click', function() {

                var parentEl = angular.element(element).parent();

                if (open) {
                    parentEl.removeClass('is-open');
                    parentEl.addClass('is-closed');
                } else {
                    parentEl.addClass('is-open is-selected');
                    parentEl.removeClass('is-closed');
                }

                open = !open;

            });

        }
    };
}

let moduleName = 'stw.stwAccordian';

angular.module(moduleName, [])
    .directive('stwAccordian', stwAccordian);

export default moduleName;
