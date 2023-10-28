const main = document.querySelector('main');
const contactBtn = document.getElementById('contact-btn');

const loadContactContent = () => {
    main.innerHTML = 'Displaying Contact Content!';
};

contactBtn.addEventListener('click', loadContactContent);