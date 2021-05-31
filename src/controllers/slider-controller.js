import {GameProcess} from "../const";
import {getSlideSize} from "../utils";

const sliderState = {
    position: 0,
    maxSlide: GameProcess.MAX_SLIDES,
    slideSize: null,
};

const translateSlidesUp = (slideElements) => {
    sliderState.slideSize = sliderState.slideSize ? sliderState.slideSize : getSlideSize(slideElements[0]);

    sliderState.position += 1;
    for (const slide of slideElements) {
        slide.style.transform = `translateX(-${sliderState.slideSize * sliderState.position}px)`;
    }
};

export const handleSliderNextClick = ({currentTarget}, gameElement) => {
    const slideElements = gameElement.querySelectorAll(`.slider__slide`);
    const sliderPrevElement = gameElement.querySelector(`.slider__prev-button`);
    
    translateSlidesUp(slideElements);
    
    if (sliderState.maxSlide + sliderState.position >= slideElements.length) {
        currentTarget.setAttribute(`disabled`, `true`);
    }

    if (sliderState.position >= 1) {
        sliderPrevElement.removeAttribute(`disabled`);
    }
};

const translateSlidesDown = (slideElements) => {
    sliderState.slideSize = sliderState.slideSize ? sliderState.slideSize : getSlideSize(slideElements[0]);
    
    sliderState.position -= 1;
    for (const slide of slideElements) {
        slide.style.transform = `translateX(${sliderState.slideSize * sliderState.position}px)`;
    }
    
};

export const handleSliderPrevClick = ({currentTarget}, gameElement) => {
    const slideElements = gameElement.querySelectorAll(`.slider__slide`);
    const sliderNextElement = gameElement.querySelector(`.slider__next-button`);
    
    translateSlidesDown(slideElements);
    
    if (sliderState.position === 0) {
        currentTarget.setAttribute(`disabled`, `true`);
    }

    if (sliderState.maxSlide + sliderState.position < slideElements.length) {
        sliderNextElement.removeAttribute(`disabled`);
    }
};