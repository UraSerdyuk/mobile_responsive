
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


//------------SLIDER--------------
let active = document.getElementById('actived');
let close = document.getElementById('closed');
let link = document.getElementById('link');
let img = document.getElementById('img480');
let arrowd = document.getElementById('arrowd');

let num =1;
if(num >= 6){
    num =6;
}

function Left() {
    if(num <=1){
        num =6;
    }
    num--;
    img.src = `./img/img${num}.png`;
    console.log('show text left ');
}

function Right() {
    num++;
    if(num > 6){
        num =1;
    }
    img.src = `./img/img${num}.png`;
    console.log('show text right ');
}


//============= END SLIDER ============