const getRatingModalTemplate = (users) => {
    const scoreItems = users.map(({name, lastName, points, isFriend}, index) => {
        const imgSeparation = `./img/modal/score_item_separation.png`;
        const friend = isFriend ? `- друг` : ``;

        return (
            `<li class="score__item">
                <p class="score__title">${index + 1}</p>
                <img src="${imgSeparation}" class="score__title-separation">
                <p class="score__title">${name} ${lastName} ${friend}</p>
                <p class="score__title">${points}</p>
            </li>`
            )
    }).join(` `);


    return (
        `<div class="game__modal modal">
            <div class="modal__backdrop"></div>
            <div class="modal__content game__modal--fade">
                <div class="modal__background"></div>
                <h4 class="modal__title">Рейтинг игроков</h4>
                <button class="modal__close" title="Закрыть модальное окно"></button>
                <div class="modal__score score">
                    <div class="score__header">
                        <p class="score__header-title">Место</p>
                        <p class="score__header-title">Имя Фамилия</p>
                        <p class="score__header-title">Опыт</p>
                    </div>
                    <ul class="score__list">

                        ${scoreItems}

                    </ul>
                </div>
            </div>
        </div>`
    );
};

export default getRatingModalTemplate;
