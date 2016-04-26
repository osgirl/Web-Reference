'use strict';

/**
 * @ngdoc function
 * @name siteSnap.controller:AppController
 * @description
 * # AppController
 * App controller of the siteSnap for overall control on initial load
 */

function AppController($rootScope) {
	$rootScope.RELEASE = {};
	$rootScope.pulled = false;
	console.log( 'app controller booting up.....' )

}

AppController.$inject = ['$rootScope'];
export default AppController;
