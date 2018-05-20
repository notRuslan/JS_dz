/*
 Задание 2:

 Функция должна вставлять элемент, переданный в переметре what в начало элемента, переданного в параметре where

 Пример:
 prepend(document.querySelector('#one'), document.querySelector('#two')) // добавит элемент переданный первым аргументом в начало элемента переданного вторым аргументом
 */
function prepend(what, where) {

    // where.appendChild(what);
    //Не понятно "в начало элемента" - этот элемент станет контейнером, или это сиблинг по отношению к where
    console.log(where.firstChild);
    where.insertBefore(what, where.children[0]); // или так :
    /*let parent = where.parentNode;
    parent.insertBefore(what, where);*/


}