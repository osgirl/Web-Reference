/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('breadcrumbs', {
            url: '/breadcrumbs',
            template: require('./breadcrumbs.html')
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
