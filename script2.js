let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('prev').addEventListener('click', () => {
    changeSlide(-1);
});

document.getElementById('next').addEventListener('click', () => {
    changeSlide(1);
});

function changeSlide(step) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}