/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './floats.routes.js';
import floatsController from './floats.controller.js';

let moduleName = 'components.floats';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug(moduleName + ' - run' );
	} )
	.controller( 'floatsController', floatsController );

export default moduleName;
