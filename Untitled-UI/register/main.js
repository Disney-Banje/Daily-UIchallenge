const pageCover = document.querySelector('.page-cover');
const article = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Load client testimonials..
document.addEventListener('DOMContentLoaded', (event) => {
  fetch('client.json') // Load client json data...
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load items data: ${response.status}`);
    }

    return response.json();
  })
  .then(clients => {
    populateCarousel(clients);
    // console.log(clients.length)

    const carouselItems = document.querySelectorAll('blockquote');
    let currentIndex = 0;

    function showSlide(index) {
      carouselItems.forEach(item => {
        item.style.display = 'none'; // hide all slides..
      });

      // show slide at the current index...
      carouselItems[index].style.display = 'block';
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    }

    function previousSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    }

    showSlide(currentIndex)

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', previousSlide);
  })
  .catch(error => console.error(`Fetch problem: ${error.message}`));

  function createClientItem(data) {
    const container = document.createElement('blockquote');
    const para = document.createElement('p');
    para.classList.add('testimony');
    para.textContent = data.text;
    container.appendChild(para);

    // footer
    const footer = document.createElement('footer');
    const clientProfile = document.createElement('div');
    clientProfile.classList.add('client-profile');
    const clientName = document.createElement('h2');
    clientName.classList.add('client-name');
    clientName.textContent = data.clientName;
    clientProfile.appendChild(clientName);

    const clientProfession = document.createElement('div');
    clientProfession.classList.add('client-profession');
    const clientRole = document.createElement('h3');
    clientRole.classList.add('client-role');
    clientRole.textContent = data.clientRole;
    const companyType = document.createElement('p');
    companyType.classList.add('company-type');
    companyType.textContent = data.company;
    clientProfession.appendChild(clientRole);
    clientProfession.appendChild(companyType);
    clientProfile.appendChild(clientProfession);

    const rating = document.createElement('div');
    rating.classList.add('rating');
    const rateLevel = document.createElement('div');
    rateLevel.classList.add('rate-level');
    for (let i = 0; i < data.rating; i++) {
      const starIcon = document.createElement('ion-icon');
      starIcon.setAttribute('name', 'star');
      rateLevel.appendChild(starIcon);
    }
    rating.appendChild(rateLevel);

    footer.appendChild(clientProfile);
    footer.appendChild(rating);
    container.appendChild(footer);

    return container;
  }

  function populateCarousel(items) {

    items.forEach((item, index) => {
      const card = createClientItem(item);
      article.appendChild(card);
    })
  }
})