/**
 * stwContextMenuLeft Directive
 * @namespace Directives
 */

'use strict';

require('./stwContextMenuOverlay.scss');

function stwContextMenuOverlay(MenuController) {

    return {
        restrict: 'E',
        replace: true,
        template: require('./stwContextMenuOverlay.html'),
        link: function(scope, element) {

            scope.$watch(function() {
                return MenuController.getState();
            }, function(newValue) {
                if (newValue === undefined) {
                    element.removeClass('show-overlay');
                } else {
                    element.addClass('show-overlay');
                }
            });

        }
    };
}

stwContextMenuOverlay.$inject = ['MenuController'];
module.exports = stwContextMenuOverlay;
