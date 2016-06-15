/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './feeds.routes';
import feedsController from './feeds.controller';

let moduleName = 'components.feeds';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'feedsController', feedsController );

export default moduleName;
