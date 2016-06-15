/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './collections.routes';
import collectionsController from './collections.controller';

let moduleName = 'components.collections';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'collectionsController', collectionsController );

export default moduleName;
