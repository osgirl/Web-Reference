/**
 * stwContextMenuLeft Directive
 * @namespace Directives
 */

'use strict';
require('./stwContextMenuOverlay.scss');

function stwContextMenuRight(MenuController) {

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

stwContextMenuRight.$inject = ['MenuController'];

module.exports = stwContextMenuRight;
