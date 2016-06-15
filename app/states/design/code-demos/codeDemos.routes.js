'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'code', {
			url         : '/code',
			template    : require( './codeDemos.html' ),
			controller  : 'CodeDemosController',
			controllerAs: 'CodeDemosCtrl'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;