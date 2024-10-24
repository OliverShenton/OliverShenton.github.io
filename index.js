/* -------------------------------------------------- */
/* Navigation */
/* -------------------------------------------------- */
const bar = document.getElementById('navigation_bar');
const toggle = document.getElementById('navigation_button');
const icon = document.getElementById('navigation_icon');

function toggleNavigation() {
  const isOpen = bar.classList.toggle('open');
  icon.icon = isOpen ? 'ion:close' : 'f7:line-horizontal-3';
}

function closeNavigation() {
  if (bar.classList.contains('open')) {
    bar.classList.remove('open');
    icon.icon = 'f7:line-horizontal-3';
  }
}

window.addEventListener('click', event => {
  if (!bar.contains(event.target) && !toggle.contains(event.target)) {
    closeNavigation();
  }
});

document.querySelectorAll('.navigation_link').forEach(link => {
  link.addEventListener('click', closeNavigation);
});

/* -------------------------------------------------- */
/* Summary Button */
/* -------------------------------------------------- */
function toggleSummaryPanel(button) {
  const panel = button.nextElementSibling;
  const icon = button.querySelector('iconify-icon');
  const allPanels = document.querySelectorAll('.summary_button_panel');
  const allIcons = document.querySelectorAll('.summary_button iconify-icon');

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

document.querySelectorAll('.summary_button').forEach(button => {
  button.addEventListener('click', function () {
    toggleSummaryPanel(this);
  });
});
