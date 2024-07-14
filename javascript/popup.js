// In a new file, let's call it popup.js

document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('closePopup');

  // Check if the form was submitted
  if (localStorage.getItem('formSubmitted') === 'true') {
      // Show the popup
      popup.style.display = 'block';

      // Clear the flag
      localStorage.removeItem('formSubmitted');
  }

  if (closePopupButton) {
      closePopupButton.addEventListener('click', function() {
          // Hide the popup
          popup.style.display = 'none';

          // Redirect to the home page or wherever you want
          window.location.href = '/cultiv8-web-project/index.html'; // Adjust this path as needed
      });
  } else {
      console.error('Close button not found');
  }
});