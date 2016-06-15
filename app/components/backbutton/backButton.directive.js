/**
 * BackButton Directive
 * @namespace Directives
 *
 * @usage : <backbutton ng-click='goBack()'></backbutton>
 */

'use strict';

let moduleName = 'siteSnap.backButton';

class BackButton {
	constructor() {
		this.restrict = 'E';
		this.replace = false;
		this.scope = false;
		this.template = `<button class='button icon button-clear'></button>`
	}

	compile(element) {
		let icon = ionic.Platform.isIOS() ? 'ion-ios-arrow-back' : 'ion-android-arrow-back';
		angular.element( element[0] ).addClass( icon );
	}
}

angular.module( moduleName, [] )
	.directive( 'backButton', () => new BackButton() )
	.run( function ($log) {
		$log.debug( 'siteSnap.backbutton directive - run' );
	} );

BackButton.$inject = ['$log'];

export default moduleName;