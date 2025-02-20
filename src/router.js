import { createElement } from './utils';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

export function initRouter(mainView) {
  function updateView(newView) {
    mainView.innerHTML = '';
    mainView.appendChild(newView);
  }

  function hashToRoute(hash) {
    switch (hash) {
      case '#/page1':
        updateView(Page1());
        break;

      case '#/page2':
        updateView(Page2());
        break;
      
      
      case '#/page3':
        updateView(Page3());
        break;

        case '#/page4':
        updateView(Page4());
        break;
        
      
      case '#/page5':
        updateView(Page5());
        break;  

      default:
        updateView(createElement('h3', { textContent: '404 Page Not Found' }));
        break;
    }
  }

  const defaultHash = window.location.hash || '#/page1';
  hashToRoute(defaultHash);

  window.addEventListener('hashchange', (evt) => {
    const newUrl = new URL(evt.newURL);
    const hash = newUrl.hash;

    hashToRoute(hash);
  });
}
