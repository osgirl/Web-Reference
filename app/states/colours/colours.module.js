/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './colours.routes.js';
import coloursController from './colours.controller.js';
import ColourService from 'services/colours/colours.class';
import errorhandler from 'factory/errorhandler/errorhandler.factory';

let moduleName = 'stw.colours';

angular.module( moduleName, [
	errorhandler.name
] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'stw.colours - run' );
	} )
	.controller( 'coloursController', coloursController )
	.service('ColourService', ColourService);

export default moduleName;
