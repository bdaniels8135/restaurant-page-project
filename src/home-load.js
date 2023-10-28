export function loadHomeContent(container) {
    container.innerHTML = '';

    const blurbString = 'Come try our famous Chicken Pot Pie!';
    const addressString = '605 N 10th St. Millville, NJ';
    const phoneNumber = '(856) 327-3230';
    const grublink = 'https://www.grubhub.com/restaurant/holly-city-cold-cuts-605-n-10th-st-millville/5250272';
    const dashlink = 'https://www.doordash.com/store/holly-city-cold-cuts-&-deli-millville-24589146/';
    const hours = {
        'Monday': '6:30 AM - 7:00 PM',
        'Tuesday': '6:30 AM - 7:00 PM',
        'Wednesday': '6:30 AM - 7:00 PM',
        'Thursday': '6:30 AM - 7:00 PM',
        'Friday': '6:30 AM - 7:00 PM',
        'Saturday': '8:00 AM - 7:00 PM',
        'Sunday': 'Closed',
    };

    // Add Blurb
    const blurb = document.createElement('h1');
    blurb.innerText = blurbString;
    container.appendChild(blurb);

    // Add Address
    const address = document.createElement('p');
    address.innerHTML = `Address: ${addressString}`;
    container.appendChild(address);

    // Add Order Info
    const phone = document.createElement('p');
    phone.innerHTML = `Phone: ${phoneNumber}`;
    container.appendChild(phone);

    // Add Hours
    const headerRow = document.createElement('tr');
    const colHeadDays = document.createElement('th');
    colHeadDays.innerText = 'Days';
    headerRow.appendChild(colHeadDays);
    const colHeadHours = document.createElement('th');
    colHeadHours.innerText = 'Hours';
    headerRow.appendChild(colHeadHours);
    const hoursTable = document.createElement('table');
    hoursTable.appendChild(headerRow);
    container.appendChild(hoursTable);
    for (let day in hours) {
        const newRow = document.createElement('tr');
        const newDayCell = document.createElement('td');
        newDayCell.innerText = day;
        newRow.appendChild(newDayCell);
        const newHoursCell = document.createElement('td');
        newHoursCell.innerText = hours[day];
        newRow.appendChild(newHoursCell);
        hoursTable.appendChild(newRow);
    };

    // Add Google Map
    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.9220688175596!2d-75.02588991577403!3d39.40326912326273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c734658baba8d7%3A0x954f5ec00bd7d4a2!2sHolly%20City%20Cold%20Cuts%20%26%20Deli!5e0!3m2!1sen!2sus!4v1698503617327!5m2!1sen!2sus';
    container.appendChild(map);
};