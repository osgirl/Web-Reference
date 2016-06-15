/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('modals', {
            url: '/modals',
            template: require('./modals.html')
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
