import { createElement } from './utils';
import { initEcoHero } from './ecoHero';

function Page5() {
    const title = createElement('h2', { 
        textContent: 'Becoming an Eco-Hero' 
    });

    const appContainer = createElement('div', { id: 'app' });

    // Return the container and title elements
    const pageElement = createElement('div', {}, [title, appContainer]);

    // Initialize eco-hero functionality after the page is rendered
    // Ensure the app container is part of the DOM before calling initEcoHero
    window.onload = () => {
        initEcoHero(); 
    };

    return pageElement;
}

export default Page5;
