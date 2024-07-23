document.addEventListener('DOMContentLoaded', function() {
  // Create the popup container
  const popupContainer = document.createElement('div');
  popupContainer.id = 'signupPopupContainer';
  popupContainer.style.display = 'none';
  popupContainer.style.position = 'fixed';
  popupContainer.style.top = '50%';
  popupContainer.style.left = '50%';
  popupContainer.style.transform = 'translate(-50%, -50%)';
  popupContainer.style.zIndex = '1000';
  popupContainer.style.backgroundColor = 'white';
  popupContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  popupContainer.style.width = '100%'; // Increased from 80% to 90%
  popupContainer.style.height = '100%'; // Increased from 80% to 90%
  popupContainer.style.maxWidth = '600px';
  popupContainer.style.maxHeight = '800px';
  popupContainer.style.overflow = 'hidden'; // Changed from 'auto' to 'hidden'


  // Create the iframe
  const iframe = document.createElement('iframe');
  iframe.src = "../html files/signup.html";
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.overflow = 'auto';

  popupContainer.appendChild(iframe);

  // Create the overlay
  const overlay = document.createElement('div');
  overlay.id = 'signupOverlay';
  overlay.style.display = 'none';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  overlay.style.zIndex = '999';

  // Add the popup container and overlay to the body
  document.body.appendChild(popupContainer);
  document.body.appendChild(overlay);

  // Function to show the popup
  function showPopup() {
    popupContainer.style.display = 'block';
    overlay.style.display = 'block';
  }

  // Function to hide the popup
  function hidePopup() {
    popupContainer.style.display = 'none';
    overlay.style.display = 'none';
  }

  // Function to adjust popup size based on screen size
  function adjustPopupSize() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    if (screenWidth <= 600) {
      popupContainer.style.width = '95%';
      popupContainer.style.height = '95%';
    } else {
      popupContainer.style.width = '90%';
      popupContainer.style.height = '90%';
    }

    // Ensure the popup doesn't exceed the screen size
    popupContainer.style.maxWidth = `${Math.min(600, screenWidth * 0.95)}px`;
    popupContainer.style.maxHeight = `${Math.min(800, screenHeight * 0.95)}px`;
  }

  // Close popup when clicking outside
  overlay.addEventListener('click', hidePopup);

  // Show the popup after 10 seconds
  setTimeout(showPopup, 10000);

   // Adjust popup size when window is resized
   window.addEventListener('resize', adjustPopupSize);

  // Add event listener to check if iframe has loaded
  iframe.addEventListener('load', function() {
    console.log('Iframe content loaded');
  });

  // Add error handling for iframe loading
  iframe.onerror = function() {
    console.error('Error loading iframe content');
  };
});