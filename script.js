'use strict';

//select element, store results of selection in modal variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//need to use query selector multiple elements of same class
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
console.log('Button clicked');
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); 
overlay.addEventListener('click', closeModal);