/**
 * Header Directive
 * @namespace Directives
 */
'use strict';

let moduleName = 'styleguide.stwHeader';
let template = require('./stwHeader.html');

class Header {
	constructor() {
		this.restrict = 'E';
		this.replace = false;
		this.template = template;
	}
}

angular.module( moduleName, [] )
	.directive( 'stwHeader', () => new Header() )
	.run( function ($log) {
		$log.debug( 'styleguide.stwHeader directive - run' );
	} );

Header.$inject = ['$log'];
export default moduleName;
