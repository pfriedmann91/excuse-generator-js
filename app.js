let who = ['mi hermano', 'mi perro', 'un cura','el marciano']
let action = ['se comio', 'mordió', 'secuestró', 'regaló', 'vomitó']
let what = ['mi tarea', 'la billetera', 'todo mi hermoso código', 'mi manual de js', 'mis ganas de vivir']
let when = ['antes de la última clase', 'cuando tenía que entregar el proyecto','de camino al curro', 'durante la fiesta']


function getRandomNumber (a,b) {
    return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyArray) {
let max = anyArray.length;
let min = 0
let random = getRandomNumber (min,max)
return anyArray[random];
}


window.onload = function () {
console.log("Hola a todos");
document.querySelector('#excusas').innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when);
};