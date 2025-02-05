import { createElement } from './utils';

function Page4() {
    const title = createElement('h2', { textContent: 'Page 4' });

    const page4Link = createElement('a', {
    href: '/#/page4',
    textContent: 'Link to Page 1',
});

    return createElement('div', {}, [title, page4Link]);
}

export default Page4;