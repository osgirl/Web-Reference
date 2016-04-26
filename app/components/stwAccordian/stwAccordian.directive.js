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
                    parentEl.removeClass('accordian_open');
//                     $analytics.eventTrack('APP.REPORT.CLOSE.ACCORDIAN', {
//                         category: 'Click',
//                         label: 'Close'
//                     });
                } else {
                    parentEl.addClass('accordian_open');
//                     $analytics.eventTrack('APP.REPORT.OPEN.ACCORDIAN', {
//                         category: 'Click',
//                         label: 'Open'
//                     });
                }

                open = !open;

            });

        }
    };
}

let moduleName = 'stwAccordian';

angular.module(moduleName, [])
    .directive('stwAccordian', stwAccordian);

export default moduleName;
