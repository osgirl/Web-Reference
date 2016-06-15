
'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state('images', {
            url: '/images',
            template: require('./images.html')
        });
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
