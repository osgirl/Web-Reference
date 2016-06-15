/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './cards.routes.js';
import creativeCardsController from './cards.controller.js';

let moduleName = 'components.creativeCards';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'creativeCardsController', creativeCardsController );

export default moduleName;
