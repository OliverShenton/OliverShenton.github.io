let acc = document.querySelectorAll('.accordion');
acc.forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

function navigationMenu() {
  const dropdown = document.getElementById('dropdown');
  const image = document.getElementById('changeIcon');
  dropdown.style.display = 'block';
  if (image.getAttribute('icon') === 'f7:line-horizontal-3') {
    image.setAttribute('icon', 'basil:cross-outline');
  }
}

window.onclick = function (event) {
  const image = document.getElementById('changeIcon');
  if (!event.target.matches('.navigation_button')) {
    const dropdowns = document.getElementsByClassName('dropdown_content');
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
        image.setAttribute('icon', 'f7:line-horizontal-3');
      }
    }
  }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetElement = document.querySelector(anchor.getAttribute('href'));
    if (targetElement) {
      const offset = targetElement.getAttribute('data-offset') || 100;
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  });
});

const popup = document.getElementById('popupBox');
const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
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
