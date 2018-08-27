let logoMenu = document.getElementById('menu');
let nav = document.getElementById('nav');

logoMenu.addEventListener('click',function () {
    nav.classList.toggle("toogle");
    console.log('test');
});