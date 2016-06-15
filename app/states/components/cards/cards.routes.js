/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('cards', {
            url: '/cards',
            template: require('./cards.html')
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
