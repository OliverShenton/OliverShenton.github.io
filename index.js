'use strict';

// -------------------------------------------------------------------------------------------------------
// Anchor Scrolling
// Get the header element
let header = document.querySelector('header');

// Get the height of the header
let headerHeight = header.offsetHeight;
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    // Get the target element that
    // the anchor link points to
    let target = document.querySelector(this.getAttribute('href'));

    let targetPosition = target.getBoundingClientRect().top - headerHeight;

    window.scrollTo({
      top: targetPosition + window.scrollY,
      behavior: 'smooth',
    });
  });
});
