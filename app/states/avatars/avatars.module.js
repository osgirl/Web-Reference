/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './avatars.routes.js';
import { AvatarsController } from './avatars.controller.js';

let moduleName = 'styleguide.avatars';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'styleguide.avatars - run' );
	} )
	.controller( 'AvatarsController', AvatarsController );

export default moduleName;
