'use strict';

import './stwContextMenu.scss';

let moduleName = 'stwContextMenu';
angular
    .module(moduleName, [])
    .factory('MenuController', require('./config/MenuFactory'))
    .run(require('./config/MenuConfig'))
    .directive('contextMenuLeft', require('./ContextMenuLeft/stwContextMenuLeft.directive.js'));
    //.directive('contextMenuRight', require('./ContextMenuRight/stwContextMenuRight.directive'))
    //.directive('contextMenuBottom', require('./ContextMenuBottom/stwContextMenuBottom.directive'))
    //.directive('contextMenuOverlay', require('./ContextMenuOverlay/stwContextMenuOverlay.directive'))
    //.directive('contextualHelpTrigger', require('./ContextualHelpTrigger/stwContextualHelpTrigger.directive'));

export default moduleName;
