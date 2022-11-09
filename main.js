const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const carousel = document.querySelector('.carousel')
let num = document.getElementById('num')
let n = 0
function showSlide() {
    const items = document.getElementsByClassName('carouselitem');
    carousel.style.transition = '0.3s ease'
    if (n > items.length - 1) {
        n = 0
    } else if (n < 0) {
        n = items.length - 1
    } else {
        carousel.style.transition = '1s ease'
    } Array(...items).forEach((element, index) => {
        num.innerHTML = `${n+1}/${items.length}`
        element.style.transform = `translate(${-500 * n}px)`
    });
}
next.onclick = () => showSlide(++n)
prev.onclick = () => showSlide(--n)
showSlide(n=0)