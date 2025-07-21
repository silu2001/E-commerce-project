function showSider() {
      const sidebar = document.querySelector('.sidebar');
      // Toggle the display property between 'flex' and 'none'
      if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
      } else {
        sidebar.style.display = 'flex';
      }
    }
    function hideSider() {
      const sidebar = document.querySelector('.sidebar');
      // Toggle the display property between 'flex' and 'none'
      if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
      } else {
        sidebar.style.display = 'flex';
      }
    }
// JavaScript functionality can be added here if needed.
// For example, you can implement the functionality for the left and right arrows to navigate through the cards.

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cards = document.querySelectorAll('.card2');

let currentIndex = 1; // Start with the center card

function updateCardVisibility() {
    cards.forEach((card2, index) => {
        card2.style.display = 'none'; // Hide all cards
    });
    cards[currentIndex].style.display = 'block'; // Show the current card
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Move left
    updateCardVisibility();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length; // Move right
    updateCardVisibility();
});

// Initialize the card visibility
updateCardVisibility();




        

        
