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
});