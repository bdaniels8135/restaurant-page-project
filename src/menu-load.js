import fishChipsImg from './img/fish-and-chips.jpg';
import saladsImg from './img/salads.jpg';
import sausagePeppersImg from './img/sausage-and-peppers.jpg';

export function loadMenuContent(container) {
    container.innerHTML = '';

    // Add Famous Favorites
    const favoritesLabel = document.createElement('h1');
    favoritesLabel.innerText = 'Famous Favorites';
    container.appendChild(favoritesLabel);

    const favorites = [
        {
            description: 'Fish and Chips',
            image: fishChipsImg,
        },
        {
            description: 'Macaroni Salad, Coleslaw, Potato Salad',
            image: saladsImg,
        },
        {
            description: 'Sausage, Peppers, and Onions',
            image: sausagePeppersImg,
        },
    ];

    for (let favorite of favorites) {
        const newLabel = document.createElement('h2');
        newLabel.innerText = favorite.description;
        const newImg = document.createElement('img');
        newImg.src = favorite.image;
        const newContainer = document.createElement('div');
        newContainer.appendChild(newLabel);
        newContainer.appendChild(newImg);
        container.appendChild(newContainer);
    };

    // Add Download Menu link
    const menuLink = document.createElement('a');
    const menuUrl = 'https://qr.page/g/OEXdug3s4F'
    menuLink.innerText = 'Download Full Menu'
    menuLink.href = menuUrl;
    container.appendChild(menuLink);

};