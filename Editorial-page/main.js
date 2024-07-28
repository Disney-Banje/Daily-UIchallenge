document.addEventListener('DOMContentLoaded', (event) => {
    // Array of gallery arts
    const gallerCollection = [
        {
            image: "https://images.unsplash.com/photo-1670258880126-d5585217d72c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDM0fHx8ZW58MHx8fHx8",
            firstname: 'hasee',
            lastname: 'nielsen',
            imagetitle: 'The golden plains'
        }
    ]; 
 
    // UI elements that we will be using 
    const currentItemNumber = document.querySelector('strong');
    const totolItemNumber = document.querySelector('.total');
    const authorFirstName = document.querySelector('.first-name');
    const authorLastName = document.querySelector('.last-name');
    const authorPreview = document.querySelector('.author-preview');
    const editorialName = document.querySelector('.editorial-name');

});