/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './badges.routes';
import badgesController from './badges.controller';

let moduleName = 'components.badges';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'badgesController', badgesController );

export default moduleName;
