const testimonials = [
    {
      author: "Sarah Jones",
      location: "Santa Monica, CA",
      testimonial: "This app has transformed my farm sales! I connect with local customers easily and sell produce directly to them, saving time and money. Customers appreciate knowing where their food comes from.",
    },
    {
      author: "John Miller",
      location: "Austin, TX",
      testimonial: "This app helped me reach new customers beyond the farmers market, expanding my sales and product variety. It's been crucial for growing my business.",
    },
    {
      author: "Alice Lee",
      location: "Seattle, WA",
      testimonial: "This app's convenience for both me and my customers is fantastic. They can easily browse and order my produce online for pick-up or delivery, making sales more efficient.",
    },
  ];
// console.log(testimonials)

// Ui elements
const clientTestimony = document.querySelector('.client-testimony');
const clientAvatar = document.querySelectorAll('img');
const clientName = document.querySelector('.client-name');
const clientRole = document.querySelector('.client-role');

// console.log(Array.from(clientAvatar));

let activeTestimony;

// Create individual instances for the element that will be visible when the window opens.
document.addEventListener('DOMContentLoaded', () => {
  activeTestimony = testimonials.find(({ author }) => author === 'Alice Lee');
    displayAuthor(activeTestimony);


    clientAvatar.forEach(avatar => {
        avatar.addEventListener('click', () => {
          clientAvatar.forEach(image => image.classList.remove('active'));

          avatar.classList.add('active');
          // console.log(avatar.alt)

          const authorName = avatar.alt;
          activeTestimony = testimonials.find(({ author }) => author === authorName);
          displayAuthor(activeTestimony);
        })
    })
})


function displayAuthor(item) {
    clientTestimony.textContent = item.testimonial;
    clientName.textContent = item.author;
    clientRole.textContent = item.location;
}