/**
 * Created by matthewhill on 12/01/2016.
 */

class breadcrumbsController {

	constructor(title) {
		this._title = title;
	}

	setTitle() {
		this._title = 'badges'
	}

}

breadcrumbsController.$inject = [];
export default breadcrumbsController;
