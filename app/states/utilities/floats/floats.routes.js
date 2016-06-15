/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('floats', {
            url: '/floats',
            template: require('./floats.html')
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
