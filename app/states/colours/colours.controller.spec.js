/**
 * Created by matthewhill on 12/01/2016.
 */

import home from './cards.module'

describe( 'CardsController', function () {
	var scope, ctrl;

	beforeEach( inject( function ($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller( CardsController, {$scope: scope} );
	} ) );

	it( 'should change the title on load', function () {
		scope.title = 'Cards';
		scope.$digest();
		expect( scope.title ).toBe( 'Cards' );
	} )

} );
