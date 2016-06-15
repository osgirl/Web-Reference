/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('collections', {
            url: '/collections',
            template: require('./collections.html'),
            controller: 'collectionsController',
            controllerAs: 'vm'
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
