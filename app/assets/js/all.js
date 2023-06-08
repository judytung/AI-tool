const menu = document.querySelector('#menu');
const toggleBtn = document.querySelector('#menu-toggle');

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 768) {
    menu.classList.add('hidden')
  }
})

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('hidden');
});
