// Welcome to your first JavaScript!
console.log('Globe Painter is loading...');

// Add a simple click interaction
function showMessage() {
    alert('Hello! This will become your globe painter!');
}

// When the page loads, set up our interactions
window.addEventListener('load', function() {
    console.log('Page loaded successfully!');
    
    // Find the h1 element and make it clickable
    const title = document.querySelector('h1');
    if (title) {
        title.style.cursor = 'pointer';
        title.addEventListener('click', showMessage);
        title.title = 'Click me!';
    }
    
    // Set up project navigation buttons
    setupProjectButtons();
});

// Function to handle project button interactions
function setupProjectButtons() {
    const newProjectBtn = document.getElementById('new-project-btn');
    const openProjectBtn = document.getElementById('open-project-btn');
    
    // New Project button - navigate to canvas page
    if (newProjectBtn) {
        newProjectBtn.addEventListener('click', function() {
            console.log('Starting new project...');
            // Navigate to the canvas/editor page
            window.location.href = 'canvas.html';
        });
    }
    
    // Open Project button - show coming soon popup
    if (openProjectBtn) {
        openProjectBtn.addEventListener('click', function() {
            console.log('Open project clicked');
            alert('Feature coming soon! \n\nWe\'re working on the ability to save and load your globe paintings. Stay tuned!');
        });
    }
}
