/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './cards.routes.js';
import CardsController from './cards.controller.js';

let moduleName = 'styleguide.cards';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'styleguide.cards - run' );
	} )
	.controller( 'CardsController', CardsController );

export default moduleName;
