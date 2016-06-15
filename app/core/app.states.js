'use strict';

StateChangeStart.$inject = ['$log', '$rootScope'];

function StateChangeStart($log, $rootScope) {

	$log.debug( 'app module - run' );

	$rootScope.$on( '$stateChangeStart',
		function (event, toState) {
			$log.debug( '$stateChangeStart - name:', toState.name );
		} );

// 	$ionicBackdrop.retain();
//
// 	$timeout( function () {
// 		$ionicBackdrop.release();
// 	}, 600 );
}

StateChangeSuccess.$inject = ['$log', '$rootScope'];

function StateChangeSuccess($log, $rootScope) {
	$rootScope.$on( '$stateChangeSuccess',
		function (event, toState) {
			$log.debug( '$stateChangeSuccess - name:', toState.name );
		} );

// 	$ionicBackdrop.retain();
//
// 	$timeout( function () {
// 		$ionicBackdrop.release();
// 	}, 600 );
}

StateNotFound.$inject = ['$log', '$rootScope'];

function StateNotFound($log, $rootScope) {

	$rootScope.$on( '$stateNotFound',
		function (event, unfoundState, fromState, fromParams) {
			$log.warn( '$stateNotFound', {
				event       : event,
				unfoundState: unfoundState,
				fromState   : fromState,
				fromParams  : fromParams
			} );
		} );

// 	$ionicBackdrop.retain();
//
// 	$timeout( function () {
// 		$ionicBackdrop.release();
// 	}, 600 );
}

StateChangeError.$inject = ['$log', '$rootScope'];

function StateChangeError($log, $rootScope) {

	$rootScope.$on( '$stateChangeError',
		function (event, toState, toParams, fromState, fromParams, error) {
			$log.error( '$stateChangeError', {
				event     : event,
				toState   : toState,
				toParams  : toParams,
				fromState : fromState,
				fromParams: fromParams,
				error     : error
			} );
			if (error) {
				throw error;
			}
		} );

// 	$ionicBackdrop.retain();
//
// 	$timeout( function () {
// 		$ionicBackdrop.release();
// 	}, 600 );

}

export {
	StateChangeStart,
	StateNotFound,
	StateChangeSuccess,
	StateChangeError
};