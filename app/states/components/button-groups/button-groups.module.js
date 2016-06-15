/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './button-groups.routes';
import buttonGroupsController from './button-groups.controller';

let moduleName = 'components.buttonGroups';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'buttonGroupsController', buttonGroupsController );

export default moduleName;
