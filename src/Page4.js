import { createElement } from './utils';

function Page4() {
    const title = createElement('h2', { textContent: 'Recommended Videos' });

    const page4Link = createElement('a', {
        href: '/#/page4',
        textContent: 'Link to Page 1',
    });

    // Hardcoded JSON data
    const recommendedVideos = [
        {
            title: "Recycling 101: Are You Recycling Correctly?",
            description: "Learn the basics of recycling and how to separate waste properly.",
            videoUrl: "https://www.youtube.com/embed/X2r8R8kKPms"
        },
        {
            title: "Recycling 101: Are You Recycling Correctly? Pt.2",
            description: "A deep dive into how plastic recycling works and its impact.",
            videoUrl: "https://www.youtube.com/embed/d4q08kmvebo"
        },
        {
            title: "Simple Ways to Reduce Plastic Waste",
            description: "Common recycling mistakes and how to avoid them.",
            videoUrl: "https://www.youtube.com/embed/1g-GGwahYDw"
        },
        {
            title: "Lets Recylce! Fun Facts About Recycling",
            description: "Common recycling mistakes and how to avoid them.",
            videoUrl: "https://www.youtube.com/embed/4sIFhHjAEj0"
        }
    ];

    // Creating a container for recommended videos
    const recommendedContainer = createElement('div', {
        id: 'recommended-videos',
        className: 'recommended-videos',
    });

    // Loop through the videos and create video cards
    recommendedVideos.forEach(video => {
        const videoCard = createElement('div', { className: 'video-card' });

        const iframe = createElement('iframe', {
            src: video.videoUrl,
            frameborder: '0',
            allowfullscreen: true,
            title: video.title,  // Add a title for accessibility
        });

        const videoTitle = createElement('h4', { textContent: video.title });
        const videoDescription = createElement('p', { textContent: video.description });

        // Append the video iframe, title, and description to the video card
        videoCard.appendChild(iframe);
        videoCard.appendChild(videoTitle);
        videoCard.appendChild(videoDescription);

        // Append the video card to the container
        recommendedContainer.appendChild(videoCard);
    });

    // Return the page with the title, link, and recommended videos
    return createElement('div', {}, [title, recommendedContainer]);
}

export default Page4;
