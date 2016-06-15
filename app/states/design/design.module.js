'use strict';

/** Load import Modules. */
import layoutModule from './layout/layout.module';
import codeModule from './code-demos/codeDemos.module';
import styleModule from './style/style.module';
import colorModule from './color/color.module';
import entryModule from './entry/entry.module';

/** Main App module variable */
let moduleName = 'design';

/** Main App module setter with module name injected */
angular.module(moduleName, [
    'ui.router',

    layoutModule,
    codeModule,
	styleModule,
	colorModule,
	entryModule
]);

/** Main App export, this makes the module available */
export default moduleName;
