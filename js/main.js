let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', hamburgerClicked)

function hamburgerClicked() {
    document.body.classList.toggle('hamburger-clicked')
}
