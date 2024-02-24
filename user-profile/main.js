// UI element to interact with...
const display_container = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", () => {
    fetch("about.json") // fetching the items from the JSOn file...
     .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load items data: ${response.status}`);
        }

        return response.json();
     })
     .then(collection => {
        // Initializing the collection into separate arrays...
        let reviews = [];
        let aboutMe = [];
        let skills = [];


        // Filtering out the items that match the conditions specified in the adequate array...
        collection.forEach(category => {
         if (category["type"] === 'review') {
            reviews.push(category);
         } else if (category["type"] === 'skills') {
            skills.push(category);
         } else if (category["type"] === 'about me') {
            aboutMe.push(category);
         }
        })

        // Trying to extract the exact element that will be used...
        const students = reviews.flatMap(review => review.reviews);
        const userSkills = skills.flatMap(skill => skill.skills)
        console.log(students);
        console.log(aboutMe);
        console.log(userSkills);
        
        displayAboutMe(aboutMe); // initial display when the window is loaded...

        const listCollection = document.querySelectorAll('li');
        listCollection.forEach(item => {
         item.addEventListener('click', () => {
            listCollection.forEach(itm => itm.classList.remove("active"));

            item.classList.add("active");

            // every time we click a button the previous content is removed;
            display_container.innerHTML = "";

            if (item.classList.contains("about_me")) {
               displayAboutMe(aboutMe);
            } else if (item.classList.contains("reviews")) {
               displayStudent(students);
            } else if (item.classList.contains("skills")) {
               displaySkills(skills);
            }
         })
        })
     })
     .catch(error => console.error(`Fetch problem: ${error.message}`));


     // Create the item UI componet..

     //Ui component for the about me section...
     function createAboutMe(item) {
      const aboutMeWrapper = document.createElement("div");
      aboutMeWrapper.className = "content_container";
      const para = document.createElement('p');
      para.textContent = item.aboutMe;
      
      aboutMeWrapper.appendChild(para);

      return aboutMeWrapper;
     }

     //UI component for the student section...
     function createStudent(item) {
      const studentWrapper = document.createElement("div");
      studentWrapper.className = "layout";
      const studentCard = document.createElement("div");
      studentCard.className = "student_card";
      const studentAvatar = document.createElement('img');
      studentAvatar.className = "student_avatar";
      studentAvatar.src = item.headshot;
      const details = document.createElement('div');
      details.className = "student_details";
      const studentName = document.createElement('h2');
      studentName.textContent = item.name;
      details.appendChild(studentName);
      const studentTestimonial = document.createElement('p');
      studentTestimonial.textContent = item.description;
      details.appendChild(studentTestimonial);

      studentWrapper.appendChild(studentAvatar);
      studentWrapper.appendChild(details);

      return studentWrapper;
     }

     //UI component for user skills section...
     function createSkills(item) {
      const listWrapper = document.createElement('div');
      listWrapper.className = "skill_wrapper";
      const listItem = document.createElement('p');
      listItem.textContent = item;
      listWrapper.appendChild(listItem);

      return listWrapper;
     }
     

     //container for displaying the content of each category about me, skills and reviews.
     function displayAboutMe(sections) {
      sections.forEach(section => {
         const card = createAboutMe(section);
         display_container.appendChild(card);
      })
     }

     function displayStudent(sections) {
      sections.forEach(section => {
         const card = createStudent(section);
         display_container.appendChild(card);
      })
     }

     function displaySkills(sections) {
      sections.forEach(section => {
         section.skills.forEach(skill => {
            const card = createSkills(skill);
            display_container.appendChild(card);
         })
      })
     }
});
