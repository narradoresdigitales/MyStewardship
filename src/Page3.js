import { createElement } from './utils';
import { fetchYouTubeVideos } from './youTubeSearch';

function Page3() {
  const searchTitle = createElement('h2', { textContent: 'Learn to be More-Eco-Friendly' });

  const searchInstructions = createElement('p', { textContent: 
      ' Looking for ways to live a greener lifestyle? Use the search bar below to find YouTube videos on:', className: 'tips-p'
  });

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

  // Search suggestions
  const title = createElement('h2', { textContent: 'Search YouTube Videos' });

  const searchInput = createElement('input', {
    id: 'search-input',
    type: 'text',
    placeholder: 'Search for YouTube videos...',
  });

  const searchButton = createElement('button', {
    id: 'search-button',
    textContent: 'Search',
  });

  const videoContainer = createElement('div', { id: 'video-container', className: 'video-grid' });

  // Create a container for the search elements (input and button)
  const searchContainer = createElement('div', { className: 'search-container' }, [
    searchInput,
    searchButton,
  ]);

  // Create a parent container for the page elements
  const pageContainer = createElement('div', {}, [
    searchTitle,
    searchInstructions,
    pSearch,
    ul,
    title,
    searchContainer, 
    videoContainer,  
  ]);

  // Handle displaying videos in a grid format
  const displayVideos = (videos) => {
    // Clear previous results
    videoContainer.innerHTML = '';

    // Create and append video cards to the container
    videos.forEach((video) => {
      const videoCard = createElement('div', { className: 'video-card' });

      const iframe = createElement('iframe', {
        src: `https://www.youtube.com/embed/${video.id.videoId}`,
        frameborder: '0',
        allowfullscreen: true,
      });

      const title = createElement('h4', { textContent: video.snippet.title });

      const description = createElement('p', { textContent: video.snippet.description });

      // Append elements to the video card
      videoCard.appendChild(iframe);
      videoCard.appendChild(title);
      videoCard.appendChild(description);

      // Append the video card to the video container
      videoContainer.appendChild(videoCard);
    });
  };

  // Attach event listener to the search button
  searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
      fetchYouTubeVideos(query).then(videos => displayVideos(videos));
    }
  });

  return pageContainer;
}

export default Page3;
