/*
CARRUCEL
*/
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carrucelDom = document.querySelector('.carrucel');
let listDom = document.querySelector('.carrucel .list');
let miniaturasDom = document.querySelector('.carrucel .miniaturas');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider ('prev');
}

let timeRunning = 1500;
let runTimeOut;

function showSlider(type){
    let itemSlider = document.querySelectorAll ('.carrucel .list .item');
    let itemMiniatura = document.querySelectorAll ('.carrucel .miniaturas .item');

    if (type === 'next') {
        listDom.appendChild(itemSlider[0]);
        miniaturasDom.appendChild(itemMiniatura[0]);
        carrucelDom.classList.add('next');
    } else {
        listDom.prepend(itemSlider[itemSlider.length -1]);
        miniaturasDom.prepend(itemMiniatura[itemMiniatura.length -1]);
        carrucelDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carrucelDom.classList.remove('next');
        carrucelDom.classList.remove('prev');
    }, timeRunning)
    
}

/*let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carrucel');
let SliderDom = carouselDom.querySelector('.carrucel .list');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carrucel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;
nextDom.onclick = function(){
    showSlider('next');    
}
prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carrucel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carrucel .miniaturas .item');

    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}*/