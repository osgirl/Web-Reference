/**
 * Created by matthill on 21/05/16.
 */

'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state( 'style', {
            url         : '/style',
            template    : require( './style.html' )
        } );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
