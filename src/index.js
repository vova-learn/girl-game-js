import {render} from './utils';
import getGameContainerTemplate from './components/game-container-template/game-container-template';
import {handleOpenModalButtonClick} from './controllers/modal-controller';
import {handleSliderNextClick, handleSliderPrevClick} from './controllers/slider-controller';
import {state} from './store/state';
import {drawCanvas} from './controllers/canvas-controller';

const gameElement = document.querySelector(`#game`);
const gameContainerTemplate = getGameContainerTemplate(state.friends);
render(gameElement, gameContainerTemplate);

const ratingButtonElement = gameElement.querySelector(`.menu__rating`);
ratingButtonElement.addEventListener(`click`, () => handleOpenModalButtonClick(gameElement));

const sliderNextElement = gameElement.querySelector(`.slider__next-button`);
const sliderPrevElement = gameElement.querySelector(`.slider__prev-button`);
sliderNextElement.addEventListener(`click`, (evt) => handleSliderNextClick(evt, gameElement));
sliderPrevElement.addEventListener(`click`, (evt) => handleSliderPrevClick(evt, gameElement));

const goButtonElement = gameElement.querySelector(`.menu__go`);
const isDevelop = false;
drawCanvas(isDevelop, goButtonElement);
