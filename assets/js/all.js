"use strict";

var menu = document.querySelector('#menu');
var toggleBtn = document.querySelector('#menu-toggle');
window.addEventListener('resize', function () {
  if (document.body.clientWidth > 768) {
    menu.classList.add('hidden');
  }
});
toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.toggle('hidden');
});
//# sourceMappingURL=all.js.map
