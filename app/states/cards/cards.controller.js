/**
 * Created by matthewhill on 12/01/2016.
 */

import image1 from './images/placeimg_600_400_people.jpg';
import image2 from './images/placeimg_600_400_people2.jpg';
import image3 from './images/placeimg_600_400_grayscale_people.jpg';
import image4 from './images/placeimg_600_400_grayscale_people2.jpg'

function CardsController() {

	let vm = this;

	vm.navTitle = 'Cards';
	vm.tester = 'Style Guide Cards example';
	vm.pageClass = 'page-about';
	vm.image1 = image1;
	vm.image2 = image2;
	vm.image3 = image3;
	vm.image4 = image4;

	console.log('we\'ve hit out controller');
}

export default CardsController;
