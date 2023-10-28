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

    homeBtn.addEventListener('click', () => loadHomeContent(main));
    menuBtn.addEventListener('click', () => loadMenuContent(main));
    contactBtn.addEventListener('click', () => loadContactContent(main));

    loadHomeContent(main);
})();