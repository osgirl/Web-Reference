'use strict';

function routeConfig($urlRouterProvider, $compileProvider) {

	$urlRouterProvider.otherwise('/');
	$compileProvider.debugInfoEnabled(false);

}

routeConfig.$inject = ['$urlRouterProvider', '$compileProvider'];
export default routeConfig;
