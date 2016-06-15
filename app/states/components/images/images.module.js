/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './images.routes';
import imagesController from './images.controller';

let moduleName = 'components.images';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'imagesController', imagesController );

export default moduleName;
