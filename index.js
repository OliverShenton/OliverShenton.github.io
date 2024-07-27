'use strict';

// -------------------------------------------------------------------------------------------------------
// Hide buttons
function employmentHideClick() {
  let empHide = document.getElementById('employmenthidden');
  if (empHide.style.display === 'none') {
    empHide.style.display = 'block';
  } else {
    empHide.style.display = 'none';
  }
}

function educationHideClick() {
  let eduHide = document.getElementById('educationhidden');
  if (eduHide.style.display === 'none') {
    eduHide.style.display = 'block';
  } else {
    eduHide.style.display = 'none';
  }
}
