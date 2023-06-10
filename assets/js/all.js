"use strict";

var menu = document.querySelector('#menu');
var toggleBtn = document.querySelector('#menu-toggle');
var goTop = document.querySelector('#goTop');
var main = document.querySelector('.main');
window.addEventListener('resize', function () {
  if (document.body.clientWidth > 1024) {
    menu.classList.add('hidden');
    toggleBtn.innerHTML = "<img src=\"./assets/images/menu.png\" alt=\"\u4E09\u689D\u767D\u7DDA\uFF0C\u6C34\u5E73\u4E26\u6392\">";
    goTop.classList.remove('hidden');
  }
});
goTop.addEventListener('click', goToTop);
toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var icon = e.target.closest('a').dataset.icon;

  if (icon === 'open') {
    menu.classList.remove('hidden');
    toggleBtn.setAttribute("data-icon", "close");
    toggleBtn.innerHTML = "<img src=\"./assets/images/close.png\" alt=\"\u5169\u984C\u767D\u7DDA\u4EA4\u53C9\uFF0C\u5F62\u6210\uFF38\u72C0\">";
    main.classList.add('hidden');
    goTop.classList.add('hidden');
  } else {
    menu.classList.add('hidden');
    toggleBtn.setAttribute("data-icon", "open");
    toggleBtn.innerHTML = "<img src=\"./assets/images/menu.png\" alt=\"\u4E09\u689D\u767D\u7DDA\uFF0C\u6C34\u5E73\u4E26\u6392\">";
    main.classList.remove('hidden');
    goTop.classList.remove('hidden');
  }
});

var goToTop = function goToTop(e) {
  e.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
//# sourceMappingURL=all.js.map
