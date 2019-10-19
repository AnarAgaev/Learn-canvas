'use strict';

let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'); // Контекст канваса сохраняем в переменную

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

/*
 * Square points
 * 
 * CANVAS_CONTEXT.fillStyle = color(string)    - закрашивает прямоугольную область
 * 
 * CANVAS_CONTEXT.fillRect(X, Y, WithX, WithY) - рисут прямоугольную область
 * X     - координата по X
 * Y     - координата по Y
 * WithX - ширина от X
 * WithY - высота от Y
 *
 * Отсчёт координат ведётс от левого верхнего угла canvas области
 */
ctx.fillStyle = 'green';  // закрашиваем четырёхугольную область 
for (let i = 0; i < 8; i++) {
    ctx.fillRect(i * 10, i * 10 + 200, 10, 10); // рисуем четырёхугольную область
}

/*
 * Examples: Person
 */
ctx.fillStyle = 'blue';
ctx.fillRect(25, 0, 50, 50);
ctx.fillRect(45, 50, 10, 15);
ctx.fillRect(0, 65, 100, 10);
ctx.fillRect(20, 75, 60, 20);
ctx.fillStyle = 'red';
ctx.fillRect(20, 95, 60, 30);
ctx.fillRect(20, 125, 10, 40);
ctx.fillRect(70, 125, 10, 40);

/*
 * Examples: Belguim flag
 */
ctx.fillStyle = 'black';
ctx.fillRect(200, 200, 50, 100);
ctx.fillStyle = 'gold';
ctx.fillRect(250, 200, 50, 100);
ctx.fillStyle = 'red';
ctx.fillRect(300, 200, 50, 100);

/*
 * Square
 *
 * CANVAS_CONTEXT.strokeStyle = color(string)          - цвет линии обводки прямоугльной области
 * CANVAS_CONTEXT.lineWidth   = line thickness(string) - толщина линии обводки
 * 
 * CANVAS_CONTEXT.strokeRect(X, Y, WithX, WithY)       - рисут прямоугольную область
 * X     - координата по X
 * Y     - координата по Y
 * WithX - ширина от X
 * WithY - высота от Y
 *
 * Отсчёт координат ведётс от левого верхнего угла canvas области
 */
ctx.strokeStyle = 'DeepPink';
ctx.lineWidth = '10';
ctx.strokeRect(200,0,100,100);

/*
 * Lines
 *
 * CANVAS_CONTEXT.strokeStyle = color(string)          - закрашивает линию
 * CANVAS_CONTEXT.lineWidth   = line thickness(string) - толщина линии без пикселей просто число
 * CANVAS_CONTEXT.beginPath()                          - стартуем рисование линии
 * 
 * CANVAS_CONTEXT.moveTo(X,Y)                          - координаты начала линии
 * CANVAS_CONTEXT.lineTo(X,Y)                          - координаты конца линии
 * X - координата по X
 * Y - координата по Y
 * 
 * CANVAS_CONTEXT.stroke()                             - наносим линию на canvas (фактически рисуем)
 * 
 * Отсчёт координат ведётс от левого верхнего угла canvas области
 */
ctx.strokeStyle = 'gold';
ctx.lineWidth = '8';
ctx.beginPath();
ctx.moveTo(250,10);
ctx.lineTo(210,50);
ctx.moveTo(210,10);
ctx.lineTo(250, 50);
ctx.stroke();

/**
 * Examples for Lines: Fany man
 */
// Head
ctx.strokeStyle = 'purple';
ctx.lineWidth = '4';
ctx.strokeRect(400, 0, 20, 20);
// Body
ctx.beginPath();
ctx.lineWidth = '6';
ctx.moveTo(410, 20);
ctx.lineTo(410, 70);
// Hands
ctx.lineWidth = '4';
ctx.moveTo(410, 40);
ctx.lineTo(390, 30);
ctx.moveTo(410, 40);
ctx.lineTo(430, 30);
// Legs
ctx.moveTo(410, 70);
ctx.lineTo(390, 95);
ctx.moveTo(410, 70);
ctx.lineTo(430, 95);
ctx.stroke();


/*
 * Fill lines
 *
 * CANVAS_CONTEXT.fillStyle = color(string) - закрашивает область внутри замкнутой линии
 * CANVAS_CONTEXT.beginPath()               - стартуем рисование замкнутой линии
 *
 * CANVAS_CONTEXT.moveTo(X,Y)               - координаты начала для нескольких замкнутых линий
 * CANVAS_CONTEXT.lineTo(X,Y)               - координаты следующей точки в череде замыкющихся линий
 * X - координата по X
 * Y - координата по Y
 *
 * CANVAS_CONTEXT.fill()                    - наносим замкнутую область на canvas  и зкрашиваем (фактически рисуем)
 *
 * Отсчёт координат ведётс от левого верхнего угла canvas области
 * 
 * Example for Fill lines: yellowgreen house
 */
ctx.fillStyle = 'yellowgreen';
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(400, 260);
ctx.lineTo(430, 230);
ctx.lineTo(460, 260);
ctx.lineTo(460, 300);
// ctx.lineTo(400, 300);
ctx.fill();

/*
 * Circles
 *
 * CANVAS_CONTEXT.strokeStyle = color(string)        - цвет линии окружности
 * CANVAS_CONTEXT.lineWidth = line thickness(string) - толщина линии окружности
 * CANVAS_CONTEXT.beginPath()                        - стартуем рисование окружности
 *
 * CANVAS_CONTEXT.arc(X, Y, RADIUS, START, TRINGLE, ON_WATCH);
 * X - координата по X
 * Y - координата по Y
 * RADIUS - радиус круга, окружности
 * START - начальная точка (0 - это крайняя точка по горизонтали справва)
 * TRINGLE - угол в радианах на который рисуем окраужностьи:
 *   Math.PI/2   - четверть круга (90 гарадусов)
 *   Math.PI     - полукруг (180 градусов)
 *   Math.PI*3/2 - две трети круга (270 градусов)
 *   Math.PI*2   - полный круг (360 градусов)
 *   Math.PI     - число Пи = 3,14
 *
 * CANVAS_CONTEXT.stroke()                           - наносим окружность на canvas (фактически рисуем)
 *
 * Отсчёт координат ведётс от левого верхнего угла canvas области
 */
ctx.strokeStyle = 'blue';
ctx.lineWidth = '5';
ctx.beginPath();
ctx.arc(500, 100, 20, 0, Math.PI/2, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(550, 100, 20, 0, Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.arc(600, 100, 50, 0, Math.PI*1.7, false);
ctx.stroke();

/**
 * Examples for Circles: curle function
 */
let circle = function (x, y, radius, color, fillCircle) {
        fillCircle ? ctx.fillStyle = color : ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI*2, false);
        fillCircle ? ctx.fill() : ctx.stroke();
    },
    colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'gold'];

ctx.lineWidth = 5;

for (let i = 0; i < colors.length; i++) {
    circle(400, 400, (i + 1) * 10, colors[i], false);
}

/**
 * Examples for Circles: drow funy snowman on clicked place
 */
function drowSnowman (x = 800, y = 100) {
    circle(x, y, 50, 'black', false);              // head
    circle(x-20, y-10, 9, 'black', true);          // left eye
    circle(x+20, y-10, 9, 'black', true);          // righ eye
    circle(x, y+10, 8, 'orange', true);            // nose
    circle(x, y+120, 70, 'black', false);          // body
    for (let i = 0; i < 3; i++) {
        circle(x, y+90 + i * 30, 9, 'blue', true); // buttons 
    }
    // make smile
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3';
    ctx.beginPath();
    ctx.arc(x, y+15, 20, 0, Math.PI / 1.23, false);
    ctx.stroke();
}

window.addEventListener('click', event => {
    drowSnowman(event.clientX, event.clientY);
});

window.addEventListener('mousemove', event => {
    circle (event.clientX, event.clientY, 7, 'red', false);
});