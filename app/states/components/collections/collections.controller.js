/**
 * Created by matthewhill on 12/01/2016.
 */

class collectionsController {

	constructor(title, tester) {
		this._title = title;
		this._tester = tester;
	}

	setTitle() {
		this._title = 'collections'
	}

}

collectionsController.$inject = [];
export default collectionsController;
