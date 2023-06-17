const menu = document.querySelector('#menu');
const toggleBtn = document.querySelector('#menu-toggle');
const goTop = document.querySelector('#goTop');
const main = document.querySelector('.main');

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 1024) {
    menu.classList.add('hidden');
    toggleBtn.innerHTML = `<img src="./assets/images/menu.png" alt="三條白線，水平並排">`;
    goTop.classList.remove('hidden');
  }
});

goTop.addEventListener('click', goToTop);

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const icon = e.target.closest('a').dataset.icon;
  if (icon === 'open') {
    menu.classList.remove('hidden');
    toggleBtn.setAttribute("data-icon", "close");
    toggleBtn.innerHTML = `<img src="./assets/images/close.png" alt="兩題白線交叉，形成Ｘ狀">`;
    main.classList.add('hidden');
    goTop.classList.add('hidden');
  } else {
    menu.classList.add('hidden');
    toggleBtn.setAttribute("data-icon", "open");
    toggleBtn.innerHTML = `<img src="./assets/images/menu.png" alt="三條白線，水平並排">`;
    main.classList.remove('hidden');
    goTop.classList.remove('hidden');
  }
});


let goToTop = (e) => {
  e.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* swiper */

const swiper = new Swiper(".cardSwiper", {
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

const path = 'https://2023-engineer-camp.zeabur.app';
const list = document.querySelector('#ai-tool-list');

let worksData = []
let pagesData = {}
let data = {
  type: '',
  sort: 0,
  page: 1,
  search: ''
}

function getData ({ type, sort, page, search }) {
  const url = `${path}/api/v1/works?sort=${sort}&page=${page}&${type ? `type=${type}&` : ''}${search ? `search=${search}` : ''}`
  axios.get(url)
    .then(res => {
      worksData = res.data.ai_works.data;
      pagesData = res.data.ai_works.page;
      renderWorks();
      
    })
}

getData(data);

function renderWorks () {
  let result = '';
  worksData.forEach(item => {
    result += `<li class="card flex flex-col border border-black-20 rounded-t-2xl w-full md:w-[48%] lg:w-[32%] overflow-hidden cursor-pointer">
    <div class="overflow-hidden">
      <img src="${item.imageUrl}" alt="${item.title}" class="w-full">
    </div>
    <div class="py-5 px-8 flex-grow">
      <h3 class="text-black-100 text-xl font-black">${item.title}</h3>
      <p class="text-black-80 text-sm leading-normal mt-3">${item.description}</p>
    </div>
    <div class="flex justify-between border-t border-black-20 py-5 px-8">
      <span class="text-black-100 leading-6 font-bold">AI 模型</span>
      <span class="text-black-100 leading-6">${item.model}</span>
    </div>
    <div class="flex justify-between border-t border-black-20 py-5 px-8">
      <span class="text-black-100 leading-6">#${item.type}</span>
      <a href="#">
        <span class="material-icons text-black-100">share</span>
      </a>
    </div>
  </li>`
  });
  list.innerHTML = result;
}


/* QA toggle */

const QA = document.querySelector('#QA');
QA.addEventListener('click', function (e) {
  if (e.target.nodeName == 'UL') return
  if (e.target.closest("li").childNodes[1].textContent === 'add') {
    e.target.closest("li").childNodes[1].textContent = 'remove';
    e.target.closest("li").childNodes[3].childNodes[3].classList.remove('hidden');
  } else {
    e.target.closest("li").childNodes[1].textContent = 'add';
    e.target.closest("li").childNodes[3].childNodes[3].classList.add('hidden');
  }
  
})