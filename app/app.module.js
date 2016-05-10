'use strict';

/** Load import Modules. */
// import walkThroughModule from 'states/walkthrough/walkthrough.module';
import homeModule from 'states/home/home.module';
import buttonsModule from 'states/buttons/buttons.module'
import codeDemos from 'states/codeDemos/codeDemos.module';

/** Load custom components **/
import stwHeader from './components/stwHeader/stwHeader.directive.js';
import media from './components/stwMediaquery/stwMq.directive';
import stwContextMenu from './components/stwContextMenu/stwContextMenu.module.js';
import stwSpinner from './components/stwSpinner/stwSpinner.directive';
import stwPrettify from './components/stwPrettify/stwPrettify.directive';
import stwAccordion from './components/stwAccordian/stwAccordian.directive';

/** Load app routes */
import appRoutes from './core/app.routes';

/** Load route states, and main config function */
import {StateChangeStart, StateChangeSuccess, StateNotFound, StateChangeError} from './core/app.states';
import AppRun from './core/app.run';

/** Load Route Controller module */
import AppController from './core/app.controller';

/** Main App module variable */
let moduleName = 'stw';

/** Main App module setter with module name injected */
angular.module(moduleName, [
    'ui.router',
    'ngAnimate',
    homeModule,
    buttonsModule,
    codeDemos,
    stwHeader,
    media,
    stwContextMenu,
    stwSpinner,
    stwAccordion,
    stwPrettify
])
/** Define default routes of the app */
    .config(appRoutes)

/** Add constants, holding version info and any configs */
    .constant('version', require('../package.json').version)
    .constant('config', require('./app.config'))

/** Add State Management */
    .run(StateChangeStart)
    .run(StateChangeSuccess)
    .run(StateNotFound)
    .run(StateChangeError)

/** pass import to the run function */
    .run(AppRun)

/** Add the default app controller */
    .controller('AppController', AppController);

/** Main App export, this makes the module available */
export default moduleName;
