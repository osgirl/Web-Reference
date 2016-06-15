/**
 * BackButton Directive
 * @namespace Directives
 *
 * @usage : <stw-backbutton ng-click='goBack()'></stw-backbutton>
 */

'use strict';

let moduleName = 'styleguide.stwBackButton';

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
	.directive( 'stwBackButton', () => new BackButton() )
	.run( function ($log) {
		$log.debug( 'siteSnap.stwBackButton directive - run' );
	} );

BackButton.$inject = ['$log'];
export default moduleName;