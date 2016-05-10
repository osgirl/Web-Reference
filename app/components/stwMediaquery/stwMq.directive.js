/**
 * media Query Directive
 * @namespace Directives
 *
 * @usage : <mq></mq>
 */

'use strict';

let moduleName = 'stw.mediaquery';

class MediaQuery {
	constructor() {
		this.restrict = 'E';
		this.replace = true;
		this.template = require(`./stwMq.html`)
	}
}

angular.module( moduleName, [] )
	.directive( 'media', () => new MediaQuery() )
	.run( function ($log) {
		$log.debug( 'stw.mediaquery directive - run' );
	} );

MediaQuery.$inject = ['$log'];

export default moduleName;