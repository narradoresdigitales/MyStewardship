import { createElement } from './utils';
import { createElements } from './recyclingSearch';

function Page2 () {




// 


// Create a container for the map and search elements
const mapContainer = createElement('div', {id: 'map-container' }); 


// Create the main page container
const pageContainer = createElement('div', {}, [mapContainer]);


// Wait for the DOM to be ready before adding the map
window.addEventListener('DOMContentLoaded', () => {
    
})
setTimeout(() => createElements('map-container'), 0);



return pageContainer;
}

export default Page2;