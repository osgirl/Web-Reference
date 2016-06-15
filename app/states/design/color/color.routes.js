/**
 * Created by matthill on 21/05/16.
 */

'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state( 'color', {
            url         : '/color',
            template    : require( './color.html' )
        } );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
