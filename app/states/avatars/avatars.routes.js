/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'avatars', {
			url         : '/avatars',
			template    : require( './avatars.html' ),
			controller  : 'AvatarsController',
			controllerAs: 'avatars'
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
