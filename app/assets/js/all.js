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
