export function loadContactContent(container) {
    container.innerHTML = '';

    const phoneString = '(856) 327-3230';
    const emailAddressString = 'totallyrealemail@notfake.com';

    const contactHeader = document.createElement('h1');
    contactHeader.innerText = 'Contact Us';
    container.appendChild(contactHeader);

    // Add Phone
    const phoneContainer = document.createElement('div');
    const phoneLabel = document.createElement('h2');
    phoneLabel.innerText = 'Call Us';
    phoneContainer.appendChild(phoneLabel);
    const phone = document.createElement('p');
    phone.innerText = phoneString;
    phoneContainer.appendChild(phone);
    container.appendChild(phoneContainer);

    // Add Email
    const emailAddressContainer = document.createElement('div');
    const emailAddressLabel = document.createElement('h2');
    emailAddressLabel.innerText = 'Email Us';
    emailAddressContainer.appendChild(emailAddressLabel);
    const email = document.createElement('p');
    email.innerText = emailAddressString;
    emailAddressContainer.appendChild(email);
    container.appendChild(emailAddressContainer);
};