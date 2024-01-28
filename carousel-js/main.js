const slides = document.querySelectorAll(".slide_wrapper");
const prev = document.querySelector(".btn-prev");
const next = document.querySelector(".btn-next");

slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 108}%)`;
});


let current_slide = 0;

let max_slides = 5;

next.addEventListener("click", () => {
    if (current_slide === max_slides) {
        current_slide = 0;
    } else {
        current_slide++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${108 * (index - current_slide)}%)`;
    })
})


prev.addEventListener("click", () => {
    if (current_slide === 0 ) {
        current_slide = max_slides
    } else {
        current_slide--;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${108 * (index - current_slide)}%)`;
    })
})
