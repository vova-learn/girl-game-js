import {InsertHtml} from "./const";

const getIdFriends = (friends) => {
    return friends.map((item) => item.id);
};

const getSortRating = (rating) => {
    return rating.sort((a, b) => b.points - a.points);
};

export const getUsers = ({rating, friends}) => {
    friends = getIdFriends(friends);
    rating = getSortRating(rating);

    return rating.map((item) => {
        item.isFriend = friends.includes(item.id);
        return item;
    });
};

export const render = (container, template, place = InsertHtml.BEFOREEND) => {
    container.insertAdjacentHTML(place, template);
};

export const getSlideSize = (slideElement) => {
    const sliderStyles = getComputedStyle(slideElement, true);
    const sliderMarginsSize = Number(sliderStyles.marginRight.replace(/[^0-9]/g, '')) + Number(sliderStyles.marginLeft.replace(/[^0-9]/g, ''));

    return sliderMarginsSize + slideElement.offsetWidth;
}

/**
 * Функции drawEllipseByCenter и drawEllipse
 * взяты здесь: https://coderoad.ru/2172798/%D0%9A%D0%B0%D0%BA-%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%BE%D0%B2%D0%B0%D0%BB-%D0%B2-html5-canvas#2173084
 */

export const drawEllipseByCenter = (context, cx, cy, w, h) => {
    drawEllipse(context, cx - w/2.0, cy - h/2.0, w, h);
};

const drawEllipse = (context, x, y, w, h) => {
    const kappa = .5522848,
        ox = (w / 2) * kappa, // control point offset horizontal
        oy = (h / 2) * kappa, // control point offset vertical
        xe = x + w,           // x-end
        ye = y + h,           // y-end
        xm = x + w / 2,       // x-middle
        ym = y + h / 2;       // y-middle
  
    context.beginPath();
    context.moveTo(x, ym);
    context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    context.stroke();
    context.lineWidth = 2;
};


/**
 * Функции getBezierBasis и getBezierCurve
 * взяты здесь: https://habr.com/ru/post/163073/ 
 */

const getBezierBasis = (i, n, t) => {
    function f(n) {
        return (n <= 1) ? 1 : n * f(n - 1);
    }
    
    return (f(n)/(f(i)*f(n - i)))* Math.pow(t, i)*Math.pow(1 - t, n - i);
};

export const getBezierCurve = (arr, step) => {
    if (step === undefined) {
        step = 0.01;
    }
    
    const res = [];
    
    step = step / arr.length;
    
    for (let t = 0.0; t < 1 + step; t += step) {
        if (t > 1) {
            t = 1;
        }
        
        const ind = res.length;
        
        res[ind] = new Array(0, 0);
        
        for (let i = 0; i < arr.length; i++) {
            const b = getBezierBasis(i, arr.length - 1, t);
            
            res[ind][0] += arr[i][0] * b;
            res[ind][1] += arr[i][1] * b;
        }
    }
    
    return res;
};