document.addEventListener("DOMContentLoaded", () => {


    function createStayCard(data) {
        const stayCard = document.createElement("article");
        stayCard.classList.add('stay-card');


        const stayCover = document.createElement('section');
        stayCover.classList.add('stay-cover');
        const img = document.createElement('img');
        img.src = data.stayPicture;
        img.alt = 'Stay indoor shot';
        stayCover.appendChild(img);


        const stayDetails = document.createElement('section');
        stayDetails.classList.add('stay-details');

        const locationDescription = document.createElement('div');
        locationDescription.classList.add('location-description');
        const unitDescription = document.createElement('p');
        unitDescription.classList.add('unit-description');
        unitDescription.textContent = data.description.location;
        const unitDirection = document.createElement('h2');
        unitDirection.classList.add('unit-direction');
        unitDirection.textContent = data.description.direction;
        locationDescription.appendChild(unitDescription);
        locationDescription.appendChild(unitDirection);


        const leadsContainer = document.createElement('div');
        leadsContainer.classList.add('leads-container');
        const ratingsContainer = document.createElement('div');
        ratingsContainer.classList.add('ratings-container');
        for (let i = 0; i < data.rating; i++) {
            const starIcon = document.createElement('ion-icon');
            starIcon.setAttribute('name', 'star');
            ratingsContainer.appendChild(starIcon);
        }
        const rating = document.createElement('p');
        rating.classList.add('rating');
        rating.textContent = data.rating;
        const reviewsData = document.createElement('p');
        reviewsData.classList.add('reviews-data');
        reviewsData.textContent = `${data.reviews} reviews`;
        leadsContainer.appendChild(ratingsContainer);
        leadsContainer.appendChild(rating);
        leadsContainer.appendChild(reviewsData);


        const stayInfo = document.createElement('div');
        stayInfo.classList.add('stay-info');

        
    }
});