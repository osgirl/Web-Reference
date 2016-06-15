/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'creative', {
			url         : '/creative',
			template    : require( './cards.html' ),
			controller  : 'creativeCardsController',
			controllerAs: 'vm'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
