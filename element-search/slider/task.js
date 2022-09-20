const previous = document.querySelector('.slider__arrow_prev');

const next = document.querySelector('.slider__arrow_next');

const itemsArray = Array.from(document.querySelectorAll('.slider__item'));

let slide = 0;

previous.onclick = () => {
    slide++;
    SlideShow(slide);
};

next.onclick = () => {
    slide--;
    SlideShow(slide);
};

function SlideShow(a) {

    const active = itemsArray.findIndex(item => item.className === "slider__item slider__item_active");
    itemsArray[active].classList.remove('slider__item_active');

    if (a > itemsArray.length) {
        slide = 1;} else if (a < 1) {
            slide = itemsArray.length;
        }

        itemsArray[slide - 1].classList.add('slider__item_active');
    }