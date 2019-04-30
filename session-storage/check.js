/* eslint-disable */
let value = '';

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);

