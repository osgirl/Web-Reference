/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './grid.routes';
import gridController from './grid.controller';

let moduleName = 'components.grid';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'gridController', gridController );

export default moduleName;
