/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'colours', {
			url         : '/colours',
			template    : require( './colours.html' ),
			controller  : 'coloursController',
			controllerAs: 'vm'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
