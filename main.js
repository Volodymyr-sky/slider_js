const imgPaths = [
    'img/iphone11-black.jpg',
    'img/iphone11-green.jpg',
    'img/iphone11-red.jpg',
];
const sliderTrack = document.querySelector('.slider__track');
for (let imgPath of imgPaths) {
    sliderTrack.innerHTML +=
    `<li class = "slider__slide">
        <img class = "slider__imgs"
        src = "${imgPath}"
        alt = "iphone" >
    </li>`;
}
const track = document.querySelector('.slider__track-container');
const navBtns = document.querySelectorAll(".slider__indicator");

const imgWidth = 300;

let currentImg = 0;
navBtns[currentImg].classList.add('active-indicator');

let trackPosition = 300;
track.style.left = trackPosition + 'px';

const onNextImg = () => {
    if (trackPosition === -300) {
        trackPosition = 300;
        currentImg = 0;
    } else {
        trackPosition -= imgWidth;
        currentImg += 1;
    }
    for (let navBtn of navBtns) {
        navBtn.classList.remove('active-indicator');
    }
    navBtns[currentImg].classList.add('active-indicator');
    track.style.left = trackPosition + 'px';
};
const startTrack = () => {
    trackPosition = 300;
    track.style.left = trackPosition + 'px';
};

const onPrevImg = () => {
    if (trackPosition === 300) {
        trackPosition = 400;
        track.style.left = trackPosition + 'px';
        setTimeout(startTrack, 300);
        currentImg = 0;
    } else {
        trackPosition += imgWidth;
        currentImg -= 1;
    }
    for (let navBtn of navBtns) {
        navBtn.classList.remove('active-indicator');
    }
    navBtns[currentImg].classList.add('active-indicator');
    track.style.left = trackPosition + 'px';
};

const changeImg = (ci, tp) => {
    currentImg = ci;
    trackPosition = tp;
    for (let navBtn of navBtns) {
        navBtn.classList.remove('active-indicator');
    }
    navBtns[currentImg].classList.add('active-indicator');
    track.style.left = trackPosition + 'px';
};

