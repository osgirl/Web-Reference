/**
 * Created by matthewhill on 12/01/2016.
 */

import badges from './badges.module.js'

describe( 'badgesController', function () {
	var scope, ctrl;

	beforeEach( inject( function ($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller( badgesController, {$scope: scope} );
	} ) );

	it( 'should change the title on load', function () {
		scope.title = 'badges';
		scope.$digest();
		expect( scope.title ).toBe( 'badges' );
	} )

} );
