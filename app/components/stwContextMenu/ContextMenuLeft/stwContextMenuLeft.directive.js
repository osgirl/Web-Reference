/**
 * contextMenuLeft Directive
 * @namespace Directives
 */

'use strict';
require('./stwContextMenuLeft.scss');


function stwContextMenuLeft(MenuController, $animateCss, $state, $rootScope) {

    return {
        restrict: 'E',
        replace: true,
        template: require('./stwContextMenuLeft.html'),
        link: function(scope, element) {

            var isOpen = false;

            scope.openSubMenu = function(routeName, links) {
                if (links) {
                    scope.subMenu = scope.subMenu === routeName ? '' : routeName;
                } else {
                    scope.subMenu = '';
                    $state.go(routeName);
                }
            };

            scope.current = $state;

            // On State Change
            $rootScope.$on('$stateChangeSuccess', function(event, toState) {
                scope.current = toState;
            });

            scope.$watch(function() {
                return MenuController.getState();
            }, function(newValue, oldValue) {
                if (newValue !== oldValue) {

                    var bodyElement;
                    var runner;
                    if (newValue === 'left' && !isOpen) {

                        bodyElement = angular.element(document.querySelector('.body_move'));
                        bodyElement.css({
                            height: MenuController.getHeight() + 'px',
                            overflow: 'hidden',
                            position: 'fixed'
                        });

                        runner = $animateCss(element, {
                            event: 'enter',
                            structural: true,
                            addClass: 'slide-in-left'
                        }).start();

                        runner.done(function() {
                            isOpen = true;
                        });
                    } else if (newValue !== 'left' && isOpen) {
                        runner = $animateCss(element, {
                            event: 'leave',
                            structural: true,
                            removeClass: 'slide-in-left'
                        }).start();

                        runner.done(function() {
                            isOpen = false;
                            bodyElement = angular.element(document.querySelector('.body_move'));

                            bodyElement.removeAttr('style');
                        });
                    }


                }
            });

        }
    };
}

stwContextMenuLeft.$inject = ['MenuController', '$animateCss', '$state', '$rootScope'];
module.exports = stwContextMenuLeft;
