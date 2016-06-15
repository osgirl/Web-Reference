/**
 * Contextual Help Trigger Directive
 * @namespace Directives
 */

'use strict';


function ContextualHelpTrigger($rootScope, MenuController) {
    require('./stwContextualHelpTrigger.scss');
    return {
		restrict: 'E',
        templateUrl: require('./stwContextualHelpTrigger.html'),
        link: function(scope, element) {

            scope.toggleContextualHelp = function() {
                $rootScope.$emit('contextual-help-menu', 'open');
                $rootScope.contextMenu('up');
            };

            scope.closeContextualHelp = function() {
                $rootScope.$emit('contextual-help-menu', 'close');
            };


            scope.$watch(function() {
                return MenuController.getState();
            }, function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (newValue !== undefined) {
                        element.addClass('hide-helper');
                    } else {
                        element.removeClass('hide-helper');
                    }
                }
            });
        }
    };
}

ContextualHelpTrigger.$inject = ['$rootScope', 'MenuController'];
module.exports = ContextualHelpTrigger;
