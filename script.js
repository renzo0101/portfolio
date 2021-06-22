const carouselSlide = document.querySelector('.carousel-slide');
const carouselImgs = document.querySelectorAll('.carousel-slide img');

// buttons
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');

// counter
let count = 1;
const size = carouselImgs[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * count) + 'px)';