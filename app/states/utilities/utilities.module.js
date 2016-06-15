/**
 * Created by matthill on 25/05/16.
 */

'use strict';

/** Load import Modules. */
import floatsModule from './floats/floats.module';

/** Main App module variable */
let moduleName = 'utilities';

/** Main App module setter with module name injected */
angular.module(moduleName, [
    'ui.router',

    floatsModule
]);

/** Main App export, this makes the module available */
export default moduleName;
