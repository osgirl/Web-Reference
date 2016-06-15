/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('tables', {
            url: '/tables',
            template: require('./tables.html'),
            controller: 'tablesController',
            controllerAs: 'vm'
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
