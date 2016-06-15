/**
 * Created by matthill on 21/05/16.
 */

'use strict';

function routeConfig($stateProvider) {
    $stateProvider
        .state( 'entry', {
            url         : '/entry',
            template    : require( './entry.html' )
        } );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
