/**
 * Created by matthill on 21/05/16.
 */

'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state( 'layout', {
            url         : '/layout',
            template    : require( './layout.html' )
        } );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
