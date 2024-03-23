// Initializing UI elements...
const exitIcon = document.querySelector('.close-popup'); // Attribution container closing icon.
const attributionContainer = document.querySelector('.attribution'); // Attribution container
const menuWidget = document.querySelector(".menu-widget img");
const container = document.querySelector('.container');

// Adding an event listener to close the popup attribution container
exitIcon.addEventListener('click', event => {
    attributionContainer.style.display = 'none';
});

function menuBox() {
    // Menu UI container 
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    const menuItems = ["Home", "New", "Popular", "Trending", "Categories"];

    const menuHeader = document.createElement("div");
    menuHeader.className = 'menu-header';
    const closingIcon = document.createElement('img');
    closingIcon.src = 'assets/images/icon-menu-close.svg';
    closingIcon.alt = 'Close icon menu';
    closingIcon.className = 'icon-menu-close';
    menuHeader.appendChild(closingIcon);
    menuContainer.appendChild(menuHeader);

    closingIcon.onclick = function () {
        menuContainer.style.display = 'none';
        container.classList.remove('blur');
    }

    const linkContainer = document.createElement('ul');
    linkContainer.className = 'link-menu-container';

    menuItems.forEach(item => { // Generating li elements corresponding to the array items...
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.className = 'link-dropdown';
        link.href = '#'
        link.textContent = `${item}`;
        listItem.appendChild(link);
        linkContainer.appendChild(listItem);
    })
    menuContainer.appendChild(linkContainer);

    return menuContainer;
}


menuWidget.addEventListener('click', event => {
    const popup = menuBox();
    document.body.appendChild(popup);
    container.classList.add('blur');
    console.log('hello gy man day')
});
