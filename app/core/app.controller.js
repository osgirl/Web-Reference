'use strict';

/**
 * @ngdoc function
 * @name stw.controller:AppController
 * @description
 * # AppController
 * App controller of the Web reference for overall control on initial load
 */

function AppController() {
	console.log( 'app controller booting up.....' );

	let vm = this;
	vm.title = 'STW Web Reference';
}

AppController.$inject = [];
export default AppController;
