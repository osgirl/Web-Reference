/**
 * Created by matthewhill on 12/01/2016.
 */

class feedsController {

	constructor(title) {
		this._title = title;
	}

	setTitle() {
		this._title = 'feeds'
	}

}

feedsController.$inject = [];
export default feedsController;
