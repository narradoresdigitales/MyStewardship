import { createElement } from './utils';

function Page1() {
  
  
  const title = createElement('h2', { 
    textContent: 'About Stewardship' });

    //create <p> 

    // Mindfulness <div>
  
    const mindfulnessDiv = createElement('div', {
      className: 'section mindfulness' }, [

      createElement('h3', {textContent: 'About Mindfulness'}),
      createElement('p', {textContent: 'Here I talk about mindfulness practices in stewardship'}),
      createElement('a', {
        href: '/#/page2',
        textContent: 'Go to Page 2'
      })
      ]
    
    );

  // Eco-Friendly <div>

  const ecofriendlyDiv = createElement('div', {
    className: 'section eco-friendly'}, [
      createElement('h3', {textContent: 'About eco-friendly practices'}),
      createElement('p', {textContent: 'Here I talk about mindfulness practices in being eco-friendly'}),
      createElement('a', {
        href: '/#/page3',
        textContent: 'Go to Page 3'
      })
    ]
  );



  return createElement('div', {}, [title, mindfulnessDiv, ecofriendlyDiv]);


}

export default Page1;  
