// UI elements that will be used...
const addContact = document.querySelector(".add_contact");
const contactList = document.querySelector(".contact_list");
const mainCard = document.querySelector(".container");

// Create a form to register new contact...
// UI form container to wrapper the input elements 
const formContainer = document.createElement("form");
// form_container.setAttribute("method", "post");
// form_container.setAttribute("enctype", "multipart/form-data");
// form_container.setAttribute("action", "https://httpbin.org/post");

const icon = document.createElement("ion-icon");
icon.setAttribute("name", "close-circle");

// First input element
const labelOne = document.createElement("label");
labelOne.textContent = `First Name:`;
labelOne.setAttribute("for", "first_name");
const inputOne = document.createElement("input");
inputOne.setAttribute("type", "text");
inputOne.setAttribute("id", "first_name");
labelOne.appendChild(inputOne);

// Second input element
const labelTwo = document.createElement("label");
labelTwo.textContent = `Last Name:`;
labelTwo.setAttribute("for", "last_name");
const inputTwo = document.createElement("input");
inputTwo.setAttribute("type", "text");
inputTwo.setAttribute("id", "last_name");
labelTwo.appendChild(inputTwo);

// Third input element
const labelThree = document.createElement("label");
labelThree.textContent = `Contacts:`;
labelThree.setAttribute("for", "contact");
const inputThree = document.createElement("input");
inputThree.setAttribute("type", "text");
inputThree.setAttribute("id", "contact");
labelThree.appendChild(inputThree);

// File upload input element with restriction to image files only...
const labelFour = document.createElement("label");
labelFour.textContent = `Upload profile image:`;
labelFour.setAttribute("for", "user_avatar");
const inputFour = document.createElement("input");
inputFour.setAttribute("type", "file");
inputFour.setAttribute("id", "user_avatar");
inputFour.setAttribute('accept', "image/jpg, image/jpeg, image/gif, image/png");
labelFour.appendChild(inputFour);



// Contact details submit form..
const saveButton = document.createElement("button");
saveButton.className = "save";
saveButton.classList.add("btn");
saveButton.setAttribute("type", "submit");
saveButton.textContent = "Save";

// Append all the elements on the form container
formContainer.appendChild(icon);
formContainer.appendChild(labelOne);
formContainer.appendChild(labelTwo);
formContainer.appendChild(labelThree);
formContainer.appendChild(labelFour);
formContainer.appendChild(saveButton);


document.body.appendChild(formContainer);
formContainer.style.display = 'none';

icon.addEventListener("click", () => {
    formContainer.style.display = "none";
    mainCard.style.display = "block";
});


// Action for saving the registered information of the new contact

addContact.addEventListener("click", () => {
    formContainer.style.display = "block";
    mainCard.style.display = "none";
});


// Contact UI card 
function contactInfo(firstName, lastName, contacts, file) {
    // Contact information container
    const contactContainer = document.createElement("div");
    contactContainer.className = "contact_card";
    const avatarContainer = document.createElement("div");
    avatarContainer.className = "contact_avatar";

    if (file === "") {
        const item = randomContactAvatar(firstName, lastName);
        avatarContainer.appendChild(item);
        contactContainer.appendChild(avatarContainer);
    } else {
        const avatar = document.createElement("img");
        avatar.src = file;
        avatar.alt = `${firstName} ${lastName}`;
        avatarContainer.appendChild(avatar);
        contactContainer.appendChild(avatarContainer);
    }

    const contactDetails = document.createElement('div');
    contactDetails.className = 'contact_info';
    
    const contactName = document.createElement('h1');
    contactName.className = 'contact_name';
    contactName.textContent = `${firstName} ${lastName}`;

    const contactAddress = document.createElement('p');
    contactAddress.className = 'contact_details';
    contactAddress.textContent = `${contacts}`;
    contactDetails.appendChild(contactName);
    contactDetails.appendChild(contactAddress);
    contactContainer.appendChild(contactDetails);

    const contactId = document.createElement('div');
    contactId.className = 'contact_id';
    contactId.textContent = `${contactIdGenerator(52100, 52200)}`;
    contactContainer.appendChild(contactId);

    return contactContainer;
}


// Random contact id number generation
function contactIdGenerator(min, max) {
    const randomDigit = Math.floor(Math.random() * (max - min) + min);
    return `A-${randomDigit}`;
}

// Avatar random generation function for contact.
// Generate an avatar if given a file that is png or jpeg
// Else generate conctact intials or avatar default icon.
function randomContactAvatar(firstName, lastName) {
    const optionCount = Math.floor(Math.random() * 2);

    switch(optionCount) {
        case 0:
            const intials = document.createElement('p');
            intials.className = 'initials';
            intials.textContent = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
            return intials;
            break;
        case 1:
            const avatarDefault = document.createElement('ion-icon');
            avatarDefault.setAttribute('name', "person-circle");
            return avatarDefault;
            break;
    }
}

saveButton.addEventListener('click', (event) => {
    event.preventDefault();

    let firstName = inputOne.value;
    let lastName = inputTwo.value;
    let contacts = inputThree.value;
    let file = inputFour.value;

    const newContact = contactInfo(firstName, lastName, contacts, file);

    formContainer.style.display = "none";
    mainCard.style.display = "block";
    // console.log(newContact);

    contactList.appendChild(newContact);

    contactList.children[contactList.children.length - 2].classList.add("border");

})

