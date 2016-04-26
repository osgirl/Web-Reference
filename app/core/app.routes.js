'use strict';

function routeConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'app', {
			url       : '/app',
			abstract  : true,
			controller: 'AppController'
		} );

	/** default route is any other url is given **/
	$urlRouterProvider.otherwise( '/' );
}

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export default routeConfig;
