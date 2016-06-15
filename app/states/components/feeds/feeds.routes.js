/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('feeds', {
            url: '/feeds',
            template: require('./feeds.html')
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
