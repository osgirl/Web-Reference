/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( '/', {
			url         : '/',
			template    : require( './home.html' ),
			controller  : 'HomeController',
			controllerAs: 'home'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
