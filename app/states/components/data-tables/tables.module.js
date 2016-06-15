/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './tables.routes';
import tablesController from './tables.controller';

let moduleName = 'components.tables';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'tablesController', tablesController );

export default moduleName;
