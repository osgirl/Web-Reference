/**
 * Header Directive
 * @namespace Directives
 */
'use strict';

let moduleName = 'stw.stwHeader';
let template = require('./stwHeader.html');

class Header {
	constructor() {
		this.restrict = 'E';
		this.replace = true;
		this.scope = {
			title: '@title'
		};
		this.template = template;
	}
}

angular.module( moduleName, [] )
	.directive( 'stwHeader', () => new Header() )
	.run( function ($log) {
		$log.debug( 'stw.stwHeader directive - run' );
	} );

Header.$inject = ['$log'];
export default moduleName;
