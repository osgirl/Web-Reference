/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

function routeConfig($stateProvider) {
	$stateProvider
		.state( 'forms', {
			url         : '/forms',
			template    : require( './forms.html' )
		} );
}

routeConfig.$inject = ['$stateProvider'];
export default routeConfig;
