let logoMenu = document.getElementById('menu');
let nav = document.getElementById('nav');
let img = document.getElementById('slider');
let imgSlider = 1;



// Выпадающее меню
logoMenu.addEventListener('click',function () {
    nav.classList.toggle("toogle");
    console.log('test');
});
//Slider
setInterval(()=>{
    imgSlider++;
    if(imgSlider > 5){
        imgSlider =1;
    }
    img.src =`./img/${imgSlider}.jpg`

},5000)