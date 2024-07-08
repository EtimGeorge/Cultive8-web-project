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

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');

  const form = document.getElementById('consultationForm');
  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('closePopup');

  console.log('Form:', form);
  console.log('Popup:', popup);
  console.log('Close button:', closePopupButton);

  if (form) {
      form.addEventListener('submit', function(event) {
          console.log('Form submitted');
          event.preventDefault();

          // Simulate an asynchronous submission
          setTimeout(function() {
              console.log('Showing popup');
              if (popup) {
                  popup.style.display = 'block';
              } else {
                  console.error('Popup element not found');
              }

              form.reset();
          }, 1000);
      });
  } else {
      console.error('Form element not found');
  }

  if (closePopupButton) {
      closePopupButton.addEventListener('click', function() {
          console.log('Close button clicked');
          if (popup) {
              popup.style.display = 'none';
          } else {
              console.error('Popup element not found');
          }
      });
  } else {
      console.error('Close button not found');
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