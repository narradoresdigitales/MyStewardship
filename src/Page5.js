import { createElement } from './utils';
import { initEcoHero } from './ecoHero';

function Page5() {
    const title = createElement('h2', { 
        textContent: 'Becoming an Eco-Hero' 
    });

    const motivateMsg = createElement('h3', {className: 'motivate-msg', textContent: 'Refresh the page to begin your journey'});

    const appContainer = createElement('div', { id: 'app' });

    // Return the container and title elements
    const pageElement = createElement('div', {className: 'gamify'}, [title, motivateMsg,appContainer]);

    // Initialize eco-hero functionality after the page is rendered
    // Ensure the app container is part of the DOM before calling initEcoHero
    window.onload = () => {
        initEcoHero(); 
    };

    return pageElement;
}

export default Page5;
