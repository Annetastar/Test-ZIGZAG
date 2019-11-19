/* Slider */
let btnLeft = document.querySelector('#left-button');
let btnRight = document.querySelector('#right-button');
let arrImages = ['cowork-1.jpg', 'cowork-2.jpg', 'cowork-3.jpg', 'cowork-4.jpg', 'cowork-5.jpg'];
let sliderImg = document.querySelector('#slider-coworking');
let i = 0;

const next = () => {
  document.querySelectorAll('.checkbox')[i].classList.remove('active');
  i++;
  document.querySelectorAll('.checkbox')[i].classList.add('active');
  sliderImg.src = `./images/${arrImages[i]}`;
  btnLeft.removeAttribute('disabled');
  if(i > 3) {
    btnRight.setAttribute('disabled', 'true');
  }
};

const previous = () => {
  document.querySelectorAll('.checkbox')[i].classList.remove('active');
  i--;
  document.querySelectorAll('.checkbox')[i].classList.add('active');
  sliderImg.src = `./images/${arrImages[i]}`;
  btnRight.removeAttribute('disabled');
  if(i === 0) {
    btnLeft.setAttribute('disabled', 'true');
  }
};

btnRight.addEventListener('click', next);
btnLeft.addEventListener('click', previous);

/* Menu */

let burgerButton = document.querySelector('#burger');
let menu = document.querySelector('#menu');
let closeMenuButton = document.querySelector('#close-burger');

const handlerMenu = () => {
  menu.style.display = 'block';
};

const handlerCloseMenu = () => {
  menu.style.display = 'none';
};

burgerButton.addEventListener('click', handlerMenu);
closeMenuButton.addEventListener('click',handlerCloseMenu);
