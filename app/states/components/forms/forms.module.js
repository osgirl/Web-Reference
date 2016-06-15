/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './forms.routes.js';
import FormsController from './forms.controller.js';

let moduleName = 'components.forms';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'FormsController', FormsController );

export default moduleName;
