'use strict';

/** Load import Modules. */
import badgesModule from './badges/badges.module';
import breadcrumbsModule from './breadcrumbs/breadcrumbs.module';
import buttonsModule from './buttons/buttons.module';
import buttonGroupsModule from './button-groups/button-groups.module';
import cardsModule from './cards/cards.module';
import creativeCardsModule from './cards-creative/cards.module';
import collectionsModule from './collections/collections.module';
import feedsModule from './feeds/feeds.module';
import formsModule from './forms/forms.module';
import gridModule from './grid-system/grid.module';
import imagesModule from './images/images.module';
import modalsModule from './modals/modals.module';
import tablesModule from './data-tables/tables.module';


/** Main App module variable */
let moduleName = 'components';

/** Main App module setter with module name injected */
angular.module(moduleName, [
    'ui.router',

    badgesModule,
	breadcrumbsModule,
    buttonsModule,
	buttonGroupsModule,
    cardsModule,
	creativeCardsModule,
    collectionsModule,
	feedsModule,
    formsModule,
	gridModule,
    imagesModule,
    modalsModule,
	tablesModule
]);

/** Main App export, this makes the module available */
export default moduleName;
