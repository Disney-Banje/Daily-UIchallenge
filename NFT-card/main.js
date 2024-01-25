//UI intialization
const like_button = document.querySelector(".like_button");
const digit = document.querySelector(".digit");
const cta = document.querySelector(".cta");
const cart = document.querySelector(".cart_container");
const cart_logo = document.querySelector(".cart");

let count = 124;

// intialization of event listeners...
like_button.addEventListener("click", () => {
    count++;
    digit.textContent = count;
});

cta.addEventListener("click", () => {
    const new_item = document.createElement("div");
    new_item.className = "item_added";
    cart.appendChild(new_item);
    cart_logo.setAttribute("name", "cart");
})