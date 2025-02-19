import { createElement } from './utils';

function Page1() {
  
  
 // const title = createElement('h2', { 
   // textContent: 'About Stewardship' });


    //create <p> 

    // Mindfulness <div>
  
    const mindfulnessDiv = createElement('div', {
      className: 'section mindfulness' }, [

      createElement('h3', {textContent: 'About RecycleGeo'}),
      createElement('p', {textContent: 'Explore local eco-friendly services near you! On this page, you can search for recycling centers, eco stores, and electric charging stations by entering your city. The map will pinpoint nearby locations, making it easier for you to find sustainable solutions in your community. Whether you are looking to recycle, shop green, or charge your electric vehicle, this page connects you to the services that matter most to your eco-conscious lifestyle.'}),
      createElement('a', {
        href: '/#/page2',
        textContent: 'Find Eco-Stores, Recycling, and Recharging centers'
      })
      ]
    
    );

  // Eco-Friendly <div>

  const ecofriendlyDiv = createElement('div', {
    className: 'section eco-friendly'}, [
      createElement('h3', {textContent: 'About eco-friendly practices'}),
      createElement('p', {textContent: 'Live a more sustainable life. On this page, you can easily search for YouTube videos covering a wide range of eco-friendly topics. From tips on sustainable living and zero waste practices to guides on recycling and energy-saving hacks, you’ll find valuable resources to help you make greener choices. Simply enter a topic in the search bar (e.g., "how to recycle plastic"), and explore informative videos that will inspire you to live more eco-consciously.'}),
      createElement('a', {
        href: '/#/page3',
        textContent: 'Begin your journey to becoming an Eco-Hero!'
      })
    ]
  );

// Eco-Friendly <div>

const LearningHub = createElement('div', {
  className: 'section eco-friendly'}, [
    createElement('h3', {textContent: 'About LearningHUb'}),
    createElement('p', {textContent: 'On this page, you will find a curated collection of recommended videos to help you learn more about recycling and eco-friendly practices. The videos cover topics like properly recycling materials, reducing plastic waste, and interesting facts about recycling. Each video is paired with a brief description to help guide your learning. Whether you are new to sustainable living or looking to deepen your knowledge, these videos are a great resource to help you get started.'}),
    createElement('a', {
      href: '/#/page4',
      textContent:  'View recommended videos.'
    })
  ]
);

// Gamify Goals

const goalsGamify = createElement('div', {
  className: 'section eco-friendly'}, [
    createElement('h3', {textContent: 'Become an Eco-Hero'}),
    createElement('p', {textContent: 'The EcoHero feature allows you to set and track your recycling goals. You can input the number of days per week you would like to commit to recycling plastics and cardboard, and then monitor your progress. The tracker provides an interactive progress bar and updates as you log your recycling actions. You can also reset your goal anytime and remove individual logs if necessary. The goal and progress are saved locally in your browser, ensuring that your recycling efforts are tracked over time.'}),
    createElement('a', {
      href: '/#/page5',
      textContent: 'Make your recycling commitment!'
    })
    
  ]
);




  return createElement('div', {}, [mindfulnessDiv, ecofriendlyDiv, LearningHub, goalsGamify]);


}

export default Page1;  
