import { createElement } from './utils';

function Page2 () {

    const title = createElement('h2', { textContent: 'Page 2' });

    const page2Link = createElement('a', {
        href: '/#/page2',
        textContent: 'Link to Page 2',
    });

    return createElement('div', {}, [title, page2Link]);
}

export default Page2;