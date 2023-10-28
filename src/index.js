import './style.css';
import './page-load';
import {loadHomeContent} from './home-load';
import {loadMenuContent} from './menu-load';
import {loadContactContent} from './contact-load';

(() =>{
    const main = document.querySelector('main');
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    const selectBtn = (selectedBtn) => {
        for (let btn of [homeBtn, menuBtn, contactBtn]) btn.classList.remove('selected');
        selectedBtn.classList.add('selected');
    };

    homeBtn.addEventListener('click', (event) => {
        selectBtn(event.currentTarget);
        loadHomeContent(main);
    });

    menuBtn.addEventListener('click', (event) => {
        selectBtn(event.currentTarget);
        loadMenuContent(main)
    });

    contactBtn.addEventListener('click', (event) => {
        selectBtn(event.currentTarget);
        loadContactContent(main)
    });

    loadHomeContent(main);
})();