/**
 * Created by matthewhill on 12/01/2016.
 */

describe( 'HomeController', function () {
	var scope, ctrl;

	beforeEach( inject( function ($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller( HomeController, {$scope: scope} );
	} ) );

	it( 'should change the title on load', function () {
		scope.title = 'Home';
		scope.$digest();
		expect( scope.title ).toBe( 'Home' );
	} )

} );
