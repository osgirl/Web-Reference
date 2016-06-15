/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('buttons', {
            url: '/buttons',
            template: require('./buttons.html')
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
