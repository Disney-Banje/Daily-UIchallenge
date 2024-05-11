

const buttons = document.querySelectorAll('button');
const rate = document.querySelector('.rate');
const digit = document.querySelector('.digit');
const priceTag = document.querySelector('.price-tag');
const icon = document.querySelector('ion-icon');

let discountApplied = false;

buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    if (button.classList.contains('discount') && !discountApplied) {
      const newPrice = discountPrice(Number(digit.textContent));
      setPrice(newPrice);
      discountApplied = true;
      console.log(`This is working`);
    } else if (button.classList.contains('cheap')) {
      digit.textContent = 115;
      discountApplied = false;
    } else if (button.classList.contains('sponsor')) {
        icon.classList.toggle('hidden');
        digit.textContent = 115;
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