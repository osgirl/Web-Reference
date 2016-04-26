'use strict';

let moduleName = 'stwSpinner';
let template = require( './stwSpinner.html' );

function stwSpinner($rootScope, $timeout) {
	require('./stwSpinner.scss');
	return {
		restrict   : 'E',
		replace    : false,
		template: template,
		link       : function (scope) {
			scope.isRouteLoading = false;

			$rootScope.$on( '$stateChangeStart', function () {
				scope.isRouteLoading = true;
			} );

			$rootScope.$on( '$stateChangeSuccess', function () {
				$timeout(function () {
					scope.isRouteLoading = false;
				},  500)
			} );
		}
	};
}

stwSpinner.$inject = ['$rootScope', '$timeout'];

angular.module( moduleName, [] )
	.directive( 'stwSpinner', stwSpinner )
	.run( function ($log) {
		$log.debug( 'styleguide.stwSpinner directive - run' );
	} );

export default moduleName;
