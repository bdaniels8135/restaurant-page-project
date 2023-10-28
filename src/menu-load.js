export function loadMenuContent(container) {
    container.innerHTML = '';
    const link = document.createElement('a');
    const menuLink = 'https://qr.page/g/OEXdug3s4F'
    link.innerText = 'Full Menu Available Here'
    link.href = menuLink;
    container.appendChild(link);
};