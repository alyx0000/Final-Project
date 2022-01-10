'use strict';

let burgerButton = document.getElementById('toggle_button');
let navBar = document.getElementById('nav_ul');

burgerButton.addEventListener('click', function(){
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})

// Slider
let data = [
    {
        id: 1,
        src: './images/index1.jpg',
        title: 'Milford Sound',
        title1: 'New Zealand',
        title2: '13°C Cloudy',
        url: 'https://www.britannica.com/science/coral-island'
    },
    {
        id: 2,
        src: './images/index2.jpg',
        title: 'The Coral Island',
        title1: 'Caribbean Sea',
        title2: '27°C Hot',
        url: 'https://www.milford-sound.co.nz/'
    },
    {
        id: 3,
        src: './images/index3.jpg',
        title: 'Savanna',
        title1: 'The North Lake Iceland',
        title2: '10°C  Cold',
        url: 'https://www.kimkim.com/c/west-north-iceland-escape-snaefellsnes-peninsula-arctic-coast-lake-myvatn-more-8-days'
    },
    {
        id: 4,
        src: './images/index4.jpg',
        title: 'The Crystal Caves',
        title1: 'The North Lake Iceland',
        title2: '-16°C Very cold',
        url: 'https://guidetoiceland.is/nature-info/ice-caves-in-iceland'
    },
]

let arrowLeft = document.getElementById('arrow_left');
let sliderWrapper = document.getElementById('slider_wrapper');
let sliderContent = document.getElementById('slider_content');
let arrowRight = document.getElementById('arrow_right');
let sliderFtr = document.getElementById('slider_ftr');

let itemContainer = document.createElement('div');
itemContainer.setAttribute('class', 'item_container');

let sliderIndex = 0;

function createATag(item){
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
	tag.setAttribute('target', '_blank')
    tag.setAttribute('class', 'more_info');
    tag.textContent = 'More info';

    return tag;
}

function createH1Tag(item){
    let tagH1 = document.createElement('h1');
    tagH1.setAttribute('class', 'title');
    tagH1.append(item.title);

    return tagH1;
}

function createH5Tag(item){
    let tagH5 = document.createElement('h5');
    tagH5.setAttribute('class', 'title1');
    tagH5.append(item.title1);

    return tagH5;
}

function createH6Tag(item){
    let tagH6 = document.createElement('h6');
    tagH6.setAttribute('class', 'title2');
    tagH6.append(item.title2);

    return tagH6;
}

function createImgTag(item){
    let tagImg = document.createElement('img');
    tagImg.setAttribute('class', 'slider_img')
    tagImg.setAttribute('src', item.src)
    tagImg.setAttribute('alt', item.title);

    return tagImg;
}

function createMoreInfo(){
    
}

function setSlide(){
    sliderWrapper.innerHTML = '';
    itemContainer.innerHTML = '';

    let slideItem = createATag(data[sliderIndex]);
    let h1Tag = createH1Tag(data[sliderIndex]);
    let h5Tag = createH5Tag(data[sliderIndex]);
    let h6Tag = createH6Tag(data[sliderIndex]);
    let imgTag = createImgTag(data[sliderIndex]);
    // let info = createMoreInfo(data[sliderIndex]);

    // slideItem.appendChild(info);
    // slideItem.appendChild(h1Tag);
    itemContainer.appendChild(h1Tag);
    itemContainer.appendChild(h5Tag);
    itemContainer.appendChild(h6Tag);

    sliderFtr.appendChild(slideItem);
    sliderContent.appendChild(itemContainer);
    sliderWrapper.appendChild(imgTag);

    sliderWrapper.appendChild(sliderContent);
}

function arrowLeftClick(){
    if(sliderIndex <= 0){
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}

function arrowRightClick(){
    if(sliderIndex >= data.length - 1){
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', arrowLeftClick);
arrowRight.addEventListener('click', arrowRightClick);

setSlide();

