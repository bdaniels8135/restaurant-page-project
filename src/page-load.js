import hcdBanner from './img/hcd-banner.jpg';

(() => {
    const body = document.querySelector('body');

    // Make header with nav buttons
    const header = document.createElement('header');
    const banner = document.createElement('img');
    banner.src = hcdBanner;
    const navUl = document.createElement('ul');
    const navBtnText = ['Home', 'Menu', 'Contact'];
    for (let text of navBtnText) {
        const li = document.createElement('li');
        li.innerHTML = text;
        li.id = `${text.toLowerCase()}-btn`;
        navUl.appendChild(li);
    };
    body.appendChild(header);
    header.appendChild(banner);
    header.appendChild(navUl);

    // Make main
    const main = document.createElement('main');
    body.appendChild(main);

    // Make footer
    const footer = document.createElement('footer');
    footer.innerHTML = 'Copyright &copy; 2023 Holy City Cold Cuts & Deli';
    body.appendChild(footer);
})();