const slides = document.querySelectorAll(".slider-list-item");
const sliderButtons = document.querySelectorAll(".slider-controls-button");

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove("slide-current");
    }
    slides[n].classList.add("slide-current");
}

const activeButton = n => {
    for(sliderButton of sliderButtons) {
        sliderButton.classList.remove("button-current");
    }
    sliderButtons[n].classList.add("button-current");
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeButton(ind);
}

sliderButtons.forEach((item, indexButton) => {
    item.addEventListener("click", () => {
        index = indexButton;
        prepareCurrentSlide(index);
    })
})