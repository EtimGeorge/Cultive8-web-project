// ===============001==============

// Get the form and popup elements
// const form = document.getElementById('consultationForm');
// const popup = document.getElementById('popup');
// const closePopup = document.getElementById('closePopup');

// Add an event listener to the form's submit event
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent the default form submission

  // Perform any necessary form validation or processing here

  // Show the popup
//   popup.style.display = 'block';
// });

// Add an event listener to the close popup button
// closePopup.addEventListener('click', () => {
  // Hide the popup
  // popup.style.display = 'none';

  // Reset the form
  // form.reset();

  // Redirect to the homepage
  // window.location.href = '../services-page.html'; // Replace with the actual URL of your homepage
// });


// ================002===============

// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('consultationForm');
//   const popup = document.getElementById('popup');
//   const closePopupButton = document.getElementById('closePopup');

//   form.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent the form from submitting normally

      // Here you would typically send the form data to a server
      // For this example, we'll just simulate a successful submission

      // Simulate an asynchronous submission (e.g., an API call)
      // setTimeout(function() {
          // Show the popup
          // popup.style.display = 'block';

          // Clear the form fields
      //     form.reset();
      // }, 1000); // Simulating a 1-second delay
  // });

  // closePopupButton.addEventListener('click', function() {
      // Hide the popup
      // popup.style.display = 'none';

      // Optionally, redirect to the home page
      // window.location.href = 'index.html'; // Uncomment this line to enable redirection
//   });
// });

// =============003================

// In main.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consultationForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Simulate an asynchronous submission
            setTimeout(function() {
                // Store a flag in localStorage to indicate successful submission
                localStorage.setItem('formSubmitted', 'true');

                // Redirect to the popup page
                window.location.href = 'msg-popup.html'; // Adjust this path as needed
            }, 1000);
        });
    } else {
        console.error('Form element not found');
    }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerLines = document.querySelectorAll('.hamburger-line');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-mobile-menu');
  hamburgerLines.forEach((line) => {
    line.classList.toggle('open');
  });
});