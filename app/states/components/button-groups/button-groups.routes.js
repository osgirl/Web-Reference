/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('button-groups', {
            url: '/button-groups',
            template: require('./button-groups.html')
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
