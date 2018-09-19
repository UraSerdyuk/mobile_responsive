
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
let img2 = document.getElementById('img2_480');
let arrowd = document.getElementById('arrowd');

let num =1;
if(num >= 9){
    num =9;
}
let num2=1;


function Left() {
    if(num <=1){
        num =9;
    }
    num--;
    img.src = `./img/first/mobile/img${num}.jpg`;
    console.log('show text left ');
}

function Right() {
    num++;
    if(num > 8){
        num =1;
    }
    img.src = `./img/first/mobile/img${num}.jpg`;
    console.log('show text right ');
}
/*Second section*/
function SecondLeft() {
    if(num2 <=1){
        num2 =8;
    }
    num2--;
    img2.src = `./img/second/mobile/img${num2}.jpg`;
    console.log('show text left ');
}

function SecondRight() {
    num2++;
    if(num2 > 8){
        num2 =1;
    }
    img2.src = `./img/second/mobile/img${num2}.jpg`;
    console.log('show text right ');
}


//============= END SLIDER ============