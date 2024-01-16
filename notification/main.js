// Initializing the component that will be used...

const confirm = document.querySelector(".confirm");
const manually = document.querySelector(".manually");
const pick = document.querySelector(".pick");
const selection = document.querySelector("#weather-select");
const span = document.querySelectorAll("span");
const title = document.querySelector(".title");
const message = document.querySelector(".message");
const notify = document.querySelector(".notify");
const cta = document.querySelector(".cta");
const form = document.querySelector("form");
const icon = document.querySelector("ion-icon");
const image = document.querySelector(".istambul_icon");

// Adding interactivity to specific elements...

[confirm, manually].forEach(button => {

    button.addEventListener("click", () => {
        if (button.classList.contains("confirm")) {
            title.classList.add("inactive");
            message.classList.add("inactive");
            cta.classList.add("inactive");
            notify.classList.remove("inactive");

        } else if (button.classList.contains("manually")) {
            removeInitialElement();
            pick.addEventListener("click", (event) => {
                event.preventDefault();
                if (selection.value === "") {
                    alert("Please make a selection.");
                } else if (selection.value === "cloudy") {
                    image.setAttribute("src", "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8fHw%3D");
                    icon.setAttribute("name", "cloudy");
                    addInitialElement();
                    span.forEach(element => element.textContent = "cloudy");
                } else if (selection.value === "sunny") {
                    image.setAttribute("src", "https://images.unsplash.com/photo-1655563113616-d3085e47e4b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fHw%3D");
                    icon.setAttribute("name", "sunny");
                    icon.style.color = "#ff9932";
                    addInitialElement();
                    span.forEach(element => element.textContent = "sunny");
                }
            })
        }
    })
})

function addInitialElement() {
    title.classList.remove("inactive");
    message.classList.remove("inactive");
    cta.classList.remove("inactive");
    form.classList.add("inactive");
}

function removeInitialElement() {
    title.classList.add("inactive");
    message.classList.add("inactive");
    cta.classList.add("inactive");
    form.classList.remove("inactive");
}