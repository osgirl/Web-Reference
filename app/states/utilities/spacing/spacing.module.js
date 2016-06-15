/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './modals.routes';
import modalsController from './modals.controller';

let moduleName = 'components.modals';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug(moduleName + ' - run' );
	} )
	.controller( 'modalsController', modalsController );

export default moduleName;
