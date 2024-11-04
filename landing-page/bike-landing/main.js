const selections = document.querySelectorAll(".selection");
const bikeShot = document.querySelector('.bike-shot');
console.log(bikeShot)

const productImageCollection = [
    'assets/rideOne.jpg',
    'assets/RideTwo.jpg',
    'assets/ridethree.jpg'
]

selections.forEach((selection, index) => {
    selection.addEventListener('click', () => {
        selections.forEach(item => item.classList.remove('selected'));
        selection.classList.add('selected');

        if (selection.matches('.image-one')) {
            bikeShot.src = productImageCollection[0];
        } else if (selection.matches('.image-two')) {
            bikeShot.src = productImageCollection[1];
        } else if (selection.matches('.image-three')) {
            bikeShot.src = productImageCollection[2];
        }
    })
})