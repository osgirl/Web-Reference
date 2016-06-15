/**
 * Created by matthewhill on 12/01/2016.
 */

class badgesController {

	constructor(title, tester) {
		this._title = title;
		this._tester = tester;
	}

	setTitle() {
		this._title = 'badges'
	}

}

badgesController.$inject = [];
export default badgesController;
