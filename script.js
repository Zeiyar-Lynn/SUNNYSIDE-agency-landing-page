const menu = document.getElementById('menu');
const dropDown = document.querySelector('nav');

menu.onclick = () => {
   dropDown.classList.toggle('drop-menu')
}