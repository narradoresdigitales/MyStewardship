import { createElement } from './utils';
import { createElements } from './recyclingSearch';

function Page2 () {

const title = createElement('h2', { textContent: 'Learn to be More-Eco-Friendly' });

const searchInstructions = createElement('p', { textContent: 
    ' Looking for ways to live a greener lifestyle? Use the search bar below to find YouTube videos on:', className: 'tips-p'
})

const ul = createElement('ul', {className: 'search-tips'}, []);

const items = [
    'Sustainable living tips',
    'Zero waste practices',
    'Recycling and upcycling guides',
    'Energy-saving hacks',
    'Eco-friendly product reviews'
];

// Add list items to the unordered list
for (const item of items) {
    const li = createElement('li', { textContent:`✅ ${item}` });
    ul.appendChild(li);
}

const pSearch = createElement('p', { innerHTML:'Simply enter a topic (e.g., "how to recycle plastic") and hit search!', className: 'search-p' });





// Create a container for the map and search elements
const mapContainer = createElement('div', {id: 'map-container' }); 


// Create the main page container
const pageContainer = createElement('div', {}, [title, searchInstructions, ul, pSearch, mapContainer]);


// Wait for the DOM to be ready before adding the map
window.addEventListener('DOMContentLoaded', () => {
    
})
setTimeout(() => createElements('map-container'), 0);



return pageContainer;
}

export default Page2;