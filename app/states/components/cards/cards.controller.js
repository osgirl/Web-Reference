/**
 * Created by matthewhill on 12/01/2016.
 */

import image1 from './images/placeimg_600_400_people.jpg';
import image2 from './images/placeimg_600_400_people2.jpg';
import image3 from './images/placeimg_600_400_grayscale_people.jpg';
import image4 from './images/placeimg_600_400_grayscale_people2.jpg'

function CardsController() {

    const map = new Map(
        [
            1, './images/placeimg_600_400_people.jpg',
            2, './images/placeimg_600_400_people2.jpg',
            3, './images/placeimg_600_400_grayscale_people.jpg',
            4, './images/placeimg_600_400_grayscale_people2.jpg'
        ]
    );

    console.log(map);

    // Map.prototype.forEach((value, key, map) => void, thisArg?) : void

    for (const entry of map.entries()) {
        console.log(entry[0], entry[1]);
    }

    let vm = this;

    vm.navTitle = 'Cards';
    vm.image1 = image1;
    vm.image2 = image2;
    vm.image3 = image3;
    vm.image4 = image4;

    console.log('we\'ve hit our cards controller');
}

export default CardsController;
