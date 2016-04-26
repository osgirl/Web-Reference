'use strict';

function MenuConfig($rootScope, MenuController) {

    $rootScope.$on('$stateChangeStart', function() {
        MenuController.setState();
    });

    $rootScope.toggleMenu = function(direction) {
        MenuController.setState(direction);
    };

}

MenuConfig.$inject = ['$rootScope', 'MenuController'];
module.exports = MenuConfig;
