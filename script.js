// Function to get the position of an element in percentage relative to a parent element
function getElementPositionPercent(element, parent) {
    const rect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    return {
        left: ((rect.left - parentRect.left) / parentRect.width) * 100,
        top: ((rect.top - parentRect.top) / parentRect.height) * 100
    };
}

// Query the relevant elements
const strawberryBtn = document.querySelector('.flavour:nth-child(6)');
const content = document.querySelector('.content');

// Set up an event listener on the strawberry button
strawberryBtn.addEventListener('click', () => {
    // Get the position percentages
    const strawberryPercent = getElementPositionPercent(strawberryBtn, content);

    // Define the GSAP timeline
    const strawberryTimeline = gsap.timeline({ paused: true });
    strawberryTimeline.to('.content', {
        clipPath: `circle(0% at ${strawberryPercent.left}% ${strawberryPercent.top}%)`
    });

    // Play the timeline
    strawberryTimeline.play();
});
