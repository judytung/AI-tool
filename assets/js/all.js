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
/* swiper */


var swiper = new Swiper(".cardSwiper", {
  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 2.2
    },
    768: {
      slidesPerView: 2
    }
  },
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
/* get ai tool data */

var path = 'https://2023-engineer-camp.zeabur.app';
var list = document.querySelector('#ai-tool-list');
var worksData = [];
var pagesData = {};
var data = {
  type: '',
  sort: 0,
  page: 1,
  search: ''
};

function getData(_ref) {
  var type = _ref.type,
      sort = _ref.sort,
      page = _ref.page,
      search = _ref.search;
  var url = "".concat(path, "/api/v1/works?sort=").concat(sort, "&page=").concat(page, "&").concat(type ? "type=".concat(type, "&") : '').concat(search ? "search=".concat(search) : '');
  axios.get(url).then(function (res) {
    worksData = res.data.ai_works.data;
    pagesData = res.data.ai_works.page;
    renderWorks();
    console.log(pagesData);
  });
}

getData(data);

function renderWorks() {
  var result = '';
  worksData.forEach(function (item) {
    result += "<li class=\"card flex flex-col border border-black-20 rounded-t-2xl w-full md:w-[48%] lg:w-[32%] overflow-hidden cursor-pointer\">\n    <div class=\"overflow-hidden\">\n      <img src=\"".concat(item.imageUrl, "\" alt=\"").concat(item.title, "\" class=\"w-full\">\n    </div>\n    <div class=\"py-5 px-8 flex-grow\">\n      <h3 class=\"text-black-100 text-xl font-black\">").concat(item.title, "</h3>\n      <p class=\"text-black-80 text-sm leading-normal mt-3\">").concat(item.description, "</p>\n    </div>\n    <div class=\"flex justify-between border-t border-black-20 py-5 px-8\">\n      <span class=\"text-black-100 leading-6 font-bold\">AI \u6A21\u578B</span>\n      <span class=\"text-black-100 leading-6\">").concat(item.model, "</span>\n    </div>\n    <div class=\"flex justify-between border-t border-black-20 py-5 px-8\">\n      <span class=\"text-black-100 leading-6\">#").concat(item.type, "</span>\n      <a href=\"#\">\n        <span class=\"material-icons text-black-100\">share</span>\n      </a>\n    </div>\n  </li>");
  });
  list.innerHTML = result;
}
//# sourceMappingURL=all.js.map
