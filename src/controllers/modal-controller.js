import getRatingModalTemplate from "../components/rating-modal-template/rating-modal-template";
import {state} from "../store/state";
import {render} from "../utils";

let isModalOpen = false;

const closeModal = (modalTimer, gameElement) => {
    const handleCloseModalClick = () => {
        clearTimeout(modalTimer);
        gameElement.removeChild(gameElement.lastChild);
        gameElement.classList.remove(`modal-open`);
        isModalOpen = false;
    };

    const closeModalElement = gameElement.querySelector(`.modal__close`);
    const backdropModalElement = gameElement.querySelector(`.modal__backdrop`);
    closeModalElement.addEventListener(`click`, handleCloseModalClick);
    backdropModalElement.addEventListener(`click`, handleCloseModalClick);
};

const openModal = (gameElement) => {
    const handleTimerForAnimation = () => {
        gameElement.classList.add(`modal-open`);
    };

    if (!isModalOpen) {
        const ratingModalTemplate = getRatingModalTemplate(state.users);
        render(gameElement, ratingModalTemplate);
        isModalOpen = true;
        const modalTimer = setTimeout(handleTimerForAnimation, 0);
        closeModal(modalTimer, gameElement);
    }
};

export const handleOpenModalButtonClick = (gameElement) => {
    openModal(gameElement);
};