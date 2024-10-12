//
// Navigation Menu
//
// Cache DOM elements to avoid repeated lookups
const navigationBar = document.getElementById('navigation_bar');
const navigationToggle = document.getElementById('navigation_toggle');
const changeIcon = document.getElementById('changeIcon');

// Toggle navigation menu function
function toggleNavigation() {
  const isOpen = navigationBar.classList.toggle('open');
  changeIcon.icon = isOpen ? 'ion:close' : 'f7:line-horizontal-3';
}

// Close navigation menu function
function closeNavigation() {
  if (navigationBar.classList.contains('open')) {
    navigationBar.classList.remove('open');
    changeIcon.icon = 'f7:line-horizontal-3';
  }
}

// Handle window click and menu link clicks
window.addEventListener('click', function (event) {
  if (
    !navigationBar.contains(event.target) &&
    !navigationToggle.contains(event.target)
  ) {
    closeNavigation();
  }
});

// Close navigation when selecting a menu item (links)
document.querySelectorAll('.navigation_link').forEach(link => {
  link.addEventListener('click', closeNavigation);
});

//
// Portfolio pop up
//
// Cache DOM elements to avoid repeated lookups
const popup = document.getElementById('popupBox');
const openPopupBtn = document.getElementById('portfolio');
const closePopupBtn = document.getElementById('closePopup');

//
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

//
// Block Dropdown
//
// Function to toggle the panels and handle the icon rotation
function togglePanel(button) {
  const panel = button.nextElementSibling;
  const icon = button.querySelector('iconify-icon');
  const allPanels = document.querySelectorAll('.button_panel');
  const allIcons = document.querySelectorAll('.expedu_button iconify-icon');

  allPanels.forEach(p => {
    if (p !== panel) {
      p.style.maxHeight = null;
      p.classList.remove('active');
    }
  });

  allIcons.forEach(i => {
    if (i !== icon) {
      i.classList.remove('rotated');
    }
  });

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.classList.remove('active');
    icon.classList.remove('rotated');
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
    panel.classList.add('active');
    icon.classList.add('rotated');
  }
}

document.querySelectorAll('.expedu_button').forEach(button => {
  button.addEventListener('click', function () {
    togglePanel(this);
  });
});
