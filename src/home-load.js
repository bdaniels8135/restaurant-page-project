const main = document.querySelector('main');
const homeBtn = document.getElementById('home-btn');

const loadHomeContent = () => {
    main.innerHTML = 'Displaying Home Content!';
};

homeBtn.addEventListener('click', loadHomeContent);

export {loadHomeContent}