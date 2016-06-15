/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('badges', {
            url: '/badges',
            template: require('./badges.html'),
            controller: 'badgesController',
            controllerAs: 'vm'
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
