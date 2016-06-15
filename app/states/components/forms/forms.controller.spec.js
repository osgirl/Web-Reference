/**
 * Created by matthewhill on 12/01/2016.
 */

import home from './forms.module'

describe( 'FormsController', function () {
	var scope, ctrl;

	beforeEach( inject( function ($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller( FormsController, {$scope: scope} );
	} ) );

	it( 'should change the title on load', function () {
		scope.title = 'Forms';
		scope.$digest();
		expect( scope.title ).toBe( 'Forms' );
	} )

} );
