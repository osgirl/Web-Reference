/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './breadcrumbs.routes';
import breadcrumbsController from './breadcrumbs.controller';

let moduleName = 'components.breadcrumbs';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'breadcrumbsController', breadcrumbsController );

export default moduleName;
