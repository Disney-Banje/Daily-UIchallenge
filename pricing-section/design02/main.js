const paymentSelection = document.querySelectorAll('.selection');
const basicPrice = document.querySelector('.basic-price');
const proPrice = document.querySelector('.pro-price');

paymentSelection.forEach(selection => {
    selection.addEventListener('click', () => {
        // console.log(selection.textContent);
        paymentSelection.forEach(item => item.classList.remove('active'));

        selection.classList.add('active');

        // console.log(selection.textContent);
        const newBasicPrice = parseInt(basicPrice.textContent) + 10;
        const newProPrice = parseInt(proPrice.textContent) + 10;

        if (selection.classList.contains('monthly-plan')) {
            basicPrice.textContent = newBasicPrice;
            proPrice.textContent = newProPrice;
        } else {
            basicPrice.textContent = 19;
            proPrice.textContent = 49;
        }
        
    })
})


