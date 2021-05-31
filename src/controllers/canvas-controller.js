import {PointColor} from "../const";
import {levels} from "../model/model-road";
import {drawEllipseByCenter} from "../utils";

const label = document.querySelector(`#label`);
const map = document.querySelector(`#map`);
const iconStart = document.querySelector(`#start`);
const iconPoint = document.querySelector(`#point`);
const iconLevel = document.querySelector(`#level`);
const iconFinish = document.querySelector(`#finish`);

let pointAnimationSize = 0;
const drawPointAnimation = (context, img, color, level, step, labelStep) => {
    const MAX_SIZE = 40;
    const SPEED = 0.7;
    context.strokeStyle = color;

    drawEllipseByCenter(
        context, 
        levels[level][step][labelStep][0] + label.width / 2, 
        levels[level][step][labelStep][1] + label.height, 
        img.width / 2 + pointAnimationSize, 
        (img.width / 2 + pointAnimationSize) / 2
    );
    
    pointAnimationSize += SPEED;
    if (pointAnimationSize > MAX_SIZE) {
        pointAnimationSize = 0;
    }
};

const drawPoints = (context) => {
    for (let i = 0; i < levels.length; i++) {
        levels: for (let j = 0; j < levels[i].length; j++) {
            if (i === 0 && j === 0) {
                context.drawImage(
                    iconStart, 
                    levels[i][j][0][0] - label.width / 2 + iconStart.width / 2 - 2, 
                    levels[i][j][0][1] + label.height - iconStart.height / 2 - 2
                );

                continue levels;
            } else if (i > 0 && j === 0) {
                context.drawImage(
                    iconLevel, 
                    levels[i][j][0][0] + label.width / 2 - iconLevel.width / 2 - 2, 
                    levels[i][j][0][1] + label.height - iconLevel.height / 2 - 1
                );

                continue levels;
            } else {
                context.drawImage(
                    iconPoint, 
                    levels[i][j][0][0] + label.width / 2 - iconPoint.width / 2, 
                    levels[i][j][0][1] + label.height - iconPoint.height / 2
                );
            }

            if (i === levels.length - 1 && j === levels[i].length - 1) {
                context.drawImage(
                    iconFinish, 
                    levels[i][j][levels[i][j].length - 1][0] + label.width / 2 - iconFinish.width / 2 - 11, 
                    levels[i][j][levels[i][j].length - 1][1] + label.height - iconFinish.height / 2 - 10
                );
            }
        }
    }
};

let indexLevel = 0;
let indexPoint = 0;
let indexStep = 0;
let isStartGame = false;
let isFinish = false;
let timer;
    
let labelCoordX = levels[indexLevel][indexPoint][indexStep][0];
let labelCoordY = levels[indexLevel][indexPoint][indexStep][1];

export const drawCanvas = (isDevelop, goButtonElement) => {
    const canvas = document.querySelector(`#canvas`);
    const context = canvas.getContext("2d");

    goButtonElement.addEventListener(`click`, ({currentTarget}) => {
        currentTarget.setAttribute(`disabled`, `true`);
        currentTarget.classList.add(`menu__button--disabled`);
        
        if (isStartGame && !isFinish) {
            if (indexPoint === levels[indexLevel].length - 1) {
                indexLevel += 1;
                indexPoint = 0;
            } else {
                indexPoint += 1;
            }
        } else if (!isStartGame && !isFinish) {
            isStartGame = true;
        } else if (isFinish && !isStartGame) {
            isFinish = false;
            indexLevel = 0;
            indexPoint = 0;
            currentTarget.removeAttribute(`disabled`, `true`);
            currentTarget.classList.remove(`menu__button--disabled`);
        } 
        
        indexStep = 0;
    });

    const drawRoad = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(map, 0, 21);

        if (!isStartGame && indexStep === 0 && indexLevel === 0 && indexPoint === 0) {
            drawPointAnimation(context, iconStart, PointColor.RED, 0, 0, 0);
        } else if (indexStep === levels[indexLevel][indexPoint].length - 1 && indexPoint !== levels[indexLevel].length - 1) {
            drawPointAnimation(context, iconStart, PointColor.BLACK, indexLevel, indexPoint, indexStep);
            goButtonElement.removeAttribute(`disabled`);
            goButtonElement.classList.remove(`menu__button--disabled`);
        } else if (indexStep === levels[indexLevel][indexPoint].length - 1 && indexPoint === levels[indexLevel].length - 1 && indexLevel !== levels.length - 1) {
            drawPointAnimation(context, iconStart, PointColor.RED, indexLevel, indexPoint, indexStep);
            goButtonElement.removeAttribute(`disabled`);
            goButtonElement.classList.remove(`menu__button--disabled`);
        } else if (indexLevel === levels.length - 1 && indexPoint === levels[indexLevel].length - 1 && indexStep === levels[indexLevel][indexPoint].length - 1) {
            drawPointAnimation(context, iconStart, PointColor.BLUE, indexLevel, indexPoint, indexStep);
            goButtonElement.removeAttribute(`disabled`);
            goButtonElement.classList.remove(`menu__button--disabled`);
            isFinish = true;
            isStartGame = false;
        }
    
        drawPoints(context);

        context.drawImage(label, labelCoordX, labelCoordY);

        if (isStartGame && indexStep < levels[indexLevel][indexPoint].length - 1) {
            indexStep += 1;
            labelCoordX = levels[indexLevel][indexPoint][indexStep][0];
            labelCoordY = levels[indexLevel][indexPoint][indexStep][1]; 
        } else if (!isFinish && !isStartGame) {
            labelCoordX = levels[indexLevel][indexPoint][indexStep][0];
            labelCoordY = levels[indexLevel][indexPoint][indexStep][1];
        }
       
        clearTimeout(timer);
        timer = setTimeout(drawRoad, 20);
    };

    /**
     * функция для построения точек маршрута
     * в режиме разработки isDevelop
     */
    const drawDevelopPoints = () => {
        let isDown = false;
        let points = [];
        let timers;

        const getCursorPosition = (canvas, event) => {
            const rect = canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            context.strokeRect(x,y,1,1);
            points.push([x - label.width / 2, y - label.height]);
            console.log(JSON.stringify(points));
        }

        canvas.addEventListener('mousedown', function(e) {
            isDown = true;
            if (isDown) {
                timers = setTimeout(() => {
                    getCursorPosition(canvas, e)
                }, 20);
            }
        });

        canvas.addEventListener('mouseup', function(e) {
            isDown = false;
            if (!isDown) {
                clearInterval(timers);   
            }
        });

        canvas.addEventListener('mouseleave', function(e) {
            isDown = false;
            if (!isDown) {
                clearInterval(timers); 
                points = [];  
            }
        });
    };

    if (isDevelop) {
        drawDevelopPoints();
    } else {
        drawRoad();
    }
};
