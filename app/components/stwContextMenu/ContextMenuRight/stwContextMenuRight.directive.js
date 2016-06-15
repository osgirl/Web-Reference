/**
 * stwContextMenuLeft Directive
 * @namespace Directives
 */

'use strict';
require('./stwContextMenuRight.scss');

function stwContextMenuRight(MenuController, $animateCss) {

    return {
        restrict: 'E',
        replace: false,
        template: require('./stwContextMenuRight.html'),
        link: function(scope, element) {

            var isOpen = false;
            scope.menuRightOpen = false;

            scope.$watch(function() {
                return MenuController.getState();
            }, function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    var runner;
                    var bodyElement;
                    if (newValue === 'right' && !isOpen) {
                        bodyElement = angular.element(document.querySelector('.body_move'));
                        bodyElement.css({
                            height: MenuController.getHeight() + 'px',
                            overflow: 'hidden',
                            position: 'fixed'
                        });

                        runner = $animateCss(element, {
                            event: 'enter',
                            structural: true,
                            addClass: 'slide-in-right'
                        }).start();
                        scope.menuRightOpen = true;
                        runner.done(function() {
                            isOpen = true;
                        });
                    } else if (newValue !== 'right' && isOpen) {
                        runner = $animateCss(element, {
                            event: 'leave',
                            structural: true,
                            removeClass: 'slide-in-right'
                        }).start();

                        runner.done(function() {
                            isOpen = false;
                            scope.menuRightOpen = false;
                            bodyElement = angular.element(document.querySelector('.body_move'));
                            bodyElement.removeAttr('style');
                        });
                    }

                }
            });

        }
    };
}

stwContextMenuRight.$inject = ['MenuController', '$animateCss'];
module.exports = stwContextMenuRight;
