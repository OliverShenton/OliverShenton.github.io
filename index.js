'use strict';

function employmentHideClick() {
  let empHide = document.getElementById('employhidden');
  if (empHide.style.display === 'none') {
    empHide.style.display = 'block';
  } else {
    empHide.style.display = 'none';
  }
}
