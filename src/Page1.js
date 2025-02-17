import { createElement } from './utils';

function Page1() {
  
  
 // const title = createElement('h2', { 
   // textContent: 'About Stewardship' });


    //create <p> 

    // Mindfulness <div>
  
    const mindfulnessDiv = createElement('div', {
      className: 'section mindfulness' }, [

      createElement('h3', {textContent: 'About RecycleGeo'}),
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

// Eco-Friendly <div>

const LearningHub = createElement('div', {
  className: 'section eco-friendly'}, [
    createElement('h3', {textContent: 'About LearningHUb practices'}),
    createElement('p', {textContent: 'Here I talk about mindfulness practices in being eco-friendly'}),
    createElement('a', {
      href: '/#/page4',
      textContent: 'Go to Page 4'
    })
  ]
);

// Gamify Goals

const goalsGamify = createElement('div', {
  className: 'section eco-friendly'}, [
    createElement('h3', {textContent: 'Become an Eco-Hero'}),
    createElement('p', {textContent: 'Here I talk about mindfulness practices in being eco-friendly'}),
    createElement('a', {
      href: '/#/page5',
      textContent: 'Go to Page 5'
    })
    
  ]
);




  return createElement('div', {}, [mindfulnessDiv, ecofriendlyDiv, LearningHub, goalsGamify]);


}

export default Page1;  
