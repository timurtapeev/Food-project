import tabs from'./modules/tabs';
import modal from'./modules/modal';
import timer from'./modules/timer';
import card from'./modules/card';
import calc from'./modules/calc';
import form from'./modules/form';
import slider from'./modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 15000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-09-04');
    card();
    calc();
    form( 'form',modalTimerId);
    slider({
        container: '.offer__slider',
        nexrArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    
});