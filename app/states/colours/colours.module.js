/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './colours.routes';
import coloursController from './colours.controller';

let moduleName = 'stw.colours';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'stw.colours - run' );
	} )
	.controller( 'coloursController', coloursController );

export default moduleName;
