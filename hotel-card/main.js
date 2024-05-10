

const buttons = document.querySelectorAll('button');
const rate = document.querySelector('.rate');
const digit = document.querySelector('.digit');
const priceTag = document.querySelector('.price-tag');
const icon = document.querySelector('ion-icon');



buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    if (button.classList.contains('discount')) {
      const newPrice = discountPrice(Number(digit.textContent));
      setPrice(newPrice);
    } else if (button.classList.contains('cheap')) {
      digit.textContent = 115;
    } else if (button.classList.contains('sponsor')) {
        icon.classList.toggle('hidden');
    }
  })
})

function discountPrice(value) {
  const discount = (value * 19) / 100;
  return value - discount;
}

function setPrice(value) {
    digit.textContent = value.toFixed(2);
}