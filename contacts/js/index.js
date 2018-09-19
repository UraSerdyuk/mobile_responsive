//-------------MENU----------
// create variable menu
let logoMenu = document.getElementById('menu');
let nav = document.getElementById('nav');
// end create variable
// tulbar menu
logoMenu.addEventListener('click',function () {
    nav.classList.toggle("toogle");
    console.log('test');
});
//===========END MENU-------------