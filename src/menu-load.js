const main = document.querySelector('main');
const menuBtn = document.getElementById('menu-btn');

const loadMenuContent = () => {
    main.innerHTML = 'Displaying Menu Content!';
};

menuBtn.addEventListener('click', loadMenuContent);