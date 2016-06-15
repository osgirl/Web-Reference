/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'grid-system', {
			url         : '/grid-system',
			template    : require( './grid.html' )
		} )
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
