// YouTubeSearch.js

const API_KEY = 'AIzaSyBaFprz1OQIV2kjp-bj-DISe-fTn4ZEdIg';

// Fetch YouTube videos
export function fetchYouTubeVideos(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Videos:", data.items);
        displayVideos(data.items);
    })
    .catch(error => console.error('Error fetching YouTube videos:', error));
}

// Display fetched YouTube videos
export function displayVideos(videos) {
    const videoContainer = document.getElementById('video-container');
    if (!videoContainer) {
    console.error("Video container not found!");
    return;
}

  videoContainer.innerHTML = ''; // Clear previous results

    videos.forEach(video => {
    if (!video.id.videoId) return; // Skip invalid results

    const videoElement = document.createElement('div');
    videoElement.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" 
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    `;
    videoContainer.appendChild(videoElement);
    });
}






// Ensure the DOM is ready before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    if (searchButton) {
        searchButton.addEventListener("click", () => {
            const query = document.getElementById("search-input").value;
            if (query) {
                fetchYouTubeVideos(query);
            }
        });
    } else {
        console.error("Search button not found!");
    }
});
