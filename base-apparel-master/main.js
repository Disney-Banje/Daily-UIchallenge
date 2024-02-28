// Page UI elements that I will be interacting with..
const page = document.querySelector('.page_container');
const input = document.querySelector('input');
const button = document.querySelector('button');
const alertIcon = document.querySelector('.error_icon');
const pageMessage = document.querySelector('.page_message');
const formContainer = document.querySelector('.form_container');



// Email pattern verification...
function verifyEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Extract username from email...
function extractUsername(email) {
    let usernameRegex = /^([^\s@]+)@/;
    let match = email.match(usernameRegex);

    if (match) {
        return match[1]; // returning the first capturing group..
    }
    return null;
}

// Return to initial page after submitting email...
function updatePage(name) {
    const container = document.createElement('div');
    container.className = 'update_page';
    const userName = document.createElement('p');
    userName.className = 'user_name';
    userName.innerHTML = `${name}`;
    const para = document.createElement('p');
    para.textContent = 'Thank you for your trust.';

    container.appendChild(userName);
    container.appendChild(para);
    return container;
}

// Adding interactivity support..
button.addEventListener('click', (event) => {
    event.preventDefault();

    // User input value..
    let userEmail = input.value;

    // create an error message...
    const alertNofify = document.createElement('p');
    alertNofify.textContent = 'Please provide a valid email'
    alertNofify.className = 'notify';

    //Need some help inside the first condition 
    if (userEmail === "" || !verifyEmail(userEmail)) {
        alertIcon.classList.remove('inactive');
        pageMessage.appendChild(alertNofify); // Every time the input fails to match the regex pattern a new alertNoify is generated each time. How can I make it only appear once, and not keep looping.
        formContainer.style.border = '1px solid red';
    } else if (verifyEmail(userEmail)) {
        const name = extractUsername(userEmail);
        const popup = updatePage(name);
        document.body.appendChild(popup);
        page.classList.add('blur');

        const returnButton = document.createElement('button');
        returnButton.textContent = 'Return';
        returnButton.classList.add('btn', 'exit_button');
        returnButton.onclick = () => {
            document.body.removeChild(popup);
            page.classList.remove('blur');
            document.body.removeChild(returnButton);
            input.value = '';
            alertIcon.classList.add('inactive');
            pageMessage.removeChild(alertNofify);
        }
        document.body.appendChild(returnButton);
    }

    // console.log('It is working'); 
})