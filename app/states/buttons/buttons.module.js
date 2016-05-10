/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './buttons.routes';
import ButtonsController from './buttons.controller';

let moduleName = 'stw.buttons';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'stw.buttons - run' );
	} )
	.controller( 'ButtonsController', ButtonsController );

export default moduleName;
