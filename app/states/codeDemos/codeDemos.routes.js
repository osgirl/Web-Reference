'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'codeDemos', {
			url         : '/codeDemos',
			template    : require( './codeDemos.html' ),
			controller  : 'CodeDemosController',
			controllerAs: 'CodeDemosCtrl'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;