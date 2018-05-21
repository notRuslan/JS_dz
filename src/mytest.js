/*
 Задание 1:

 Функция должна добавлять обработчик fn события eventName к элементу target

 Пример:
 addListener('click', document.querySelector('a'), () => console.log('...')) // должна добавить указанный обработчик кликов на указанный элемент
 */
function addListener(eventName, target, fn) {
    target.preventDefault;
    target.addEventListener(eventName, fn);
}