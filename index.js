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
