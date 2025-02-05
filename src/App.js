import { createElement } from './utils';
import { initRouter } from './router';

function Header(mainDiv) {
  const appTitle = createElement('h1', {
    textContent: 'MyStewardship',
    className: 'heading',
  });

  // nav items
  const page1 = createElement('a', {
    href: '/#/page1',
    textContent: 'Home',
  });


  const page2 = createElement('a', {
    href: '/#/page2',
    textContent: 'Mindfulness',
  });


  const page3 = createElement('a', {
    href: '/#/page3',
    textContent: 'Eco-Friendly',
  });


  const page4 = createElement('a', {
    href: '/#/page4',
    textContent: 'Contact',
  })

// hamburger button 


const hamburgerBtn = createElement('button', {
  className: 'hamburger-btn',
  innerHTML: '&#9776;',
})


// toggle navigation links visibility when the hamburger is clicked

hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
})


  const nav = createElement('nav', {}, [page1, page2, page3, page4]);

  return createElement('header', {}, [appTitle, hamburgerBtn]);
}

function Footer() {
  const copyright = createElement('span', {
    textContent: `Copyright © ${new Date().getFullYear()}`,
  });

  return createElement('footer', {}, [copyright]);
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {}, [Header(main), main, Footer()]);
}

export default App;
