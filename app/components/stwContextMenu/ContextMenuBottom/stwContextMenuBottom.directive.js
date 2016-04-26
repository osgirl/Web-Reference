/**
 * stwContextMenuLeft Directive
 * @namespace Directives
 */

'use strict';
require('./stwContextMenuBottom.scss');

function stwContextMenuBottom(MenuController, $animateCss) {

    return {
        restrict: 'E',
        replace: true,
        template: require('./stwContextMenuBottom.html'),
        link: function(scope, element) {

            var isOpen = false;

            scope.$watch(function() {
                return MenuController.getState();
            }, function(newValue, oldValue) {
                if (newValue !== oldValue) {

                    var bodyElement;
                    var runner;

                    if (newValue === 'bottom' && !isOpen) {

                        bodyElement = angular.element(document.querySelector('.body_move'));
                        bodyElement.css({
                            height: MenuController.getHeight() + 'px',
                            overflow: 'hidden',
                            position: 'fixed'
                        });

                        runner = $animateCss(element, {
                            event: 'enter',
                            structural: true,
                            addClass: 'slide-in-bottom'
                        }).start();

                        runner.done(function() {
                            isOpen = true;
                        });
                    } else if (newValue !== 'bottom' && isOpen) {
                        runner = $animateCss(element, {
                            event: 'leave',
                            structural: true,
                            removeClass: 'slide-in-bottom'
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

stwContextMenuBottom.$inject = ['MenuController', '$animateCss'];

module.exports = stwContextMenuBottom;
