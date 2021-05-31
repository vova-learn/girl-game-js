import {GameProcess} from "../../const";

const getGameContainerTemplate = (friends) => {
    const friendsLists = friends.map(({name, lastName, img}) => {
        return (
            `<li class="slider__slide">
                <img src="./img/users/${img}" title="${name} ${lastName}">
            </li>`
        )
    }).reduce((acc, item, index, array) => {
        if (index < array.length - 1) {
            acc.push(item);
        } else {
            if (array.length >= GameProcess.MAX_SLIDES) {
                acc.push(item);
            } else {
                const arr = [];
                arr.push(item);
                
                // TODO: один лишний слайдер для демонстрации
                //       для точной работы слайдера заменить "<=" на "<"
                for (let i = array.length; i <= GameProcess.MAX_SLIDES; i++) {
                    arr.push(`<li class="slider__slide"></li>`);
                }

                acc = acc.concat(arr);
            }
        }

        return acc;
    }, []);

    return (
        `<div class="game__container">
            <canvas id="canvas" class="game__process" width="980" height="630"></canvas>
            <div class="game__menu menu">
                <div class="menu__slider slider">
                    <button class="slider__prev-button menu__button" title="Слайдер назад" disabled></button>
                    <button class="slider__add-slide menu__button" title="Добавить друзей" disabled></button>
                    <ul class="slider__container">
                        
                        ${friendsLists.join(` `)}

                    </ul>
                    <button class="slider__next-button menu__button" title="Слайдер вперед" ${friendsLists.length === GameProcess.MAX_SLIDES ? `disabled` : ``}></button>
                </div>
                <button class="menu__chat menu__button" title="Открыть чат" disabled></button>
                <button class="menu__go menu__button" title="В УНИВЕР">В УНИВЕР</button>
                <button class="menu__message menu__button" title="Написать письмо" disabled></button>
                <button class="menu__rating menu__button" title="Просмотреть рейтинг"></button>
            </div>
        </div>`
    );
}

export default getGameContainerTemplate;