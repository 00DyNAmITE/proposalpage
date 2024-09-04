document.getElementById('yes').addEventListener('click', function() {
    window.location.href = 'love_letter.html'; // Redirect to love letter page
});

const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

noButton.addEventListener('mouseover', function() {
    swapNoButtonPosition();
});

noButton.addEventListener('touchstart', function() { // For touch screens
    swapNoButtonPosition();
});

function swapNoButtonPosition() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();

    // Get a random position within the container bounds
    const maxTop = containerRect.height - noButton.offsetHeight;
    const maxLeft = containerRect.width - noButton.offsetWidth;
    
    const newTop = Math.random() * maxTop;
    const newLeft = Math.random() * maxLeft;

    // Apply the new position
    noButton.style.position = 'absolute';
    noButton.style.top = `${newTop}px`;
    noButton.style.left = `${newLeft}px`;
}

document.getElementById('yes').addEventListener('click', function() {
    window.location.href = 'love_letter.html';
});

document.getElementById('no').addEventListener('mouseover', function() {
    moveNoButton();
});

document.getElementById('no').addEventListener('touchstart', function() { // For touch screens
    moveNoButton();
});

function moveNoButton() {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    // Get the container's dimensions
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    // Calculate new random positions within the container's dimensions
    const maxTop = containerRect.height - noButton.offsetHeight;
    const maxLeft = containerRect.width - noButton.offsetWidth;

    const newTop = Math.random() * maxTop;
    const newLeft = Math.random() * maxLeft;

    // Apply the new positions
    noButton.style.position = 'absolute';
    noButton.style.top = `${newTop}px`;
    noButton.style.left = `${newLeft}px`;
}
