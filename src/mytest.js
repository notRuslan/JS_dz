/*
 Задание 3:

 3.1: Функция должна перебрать все дочерние элементы узла, переданного в параметре where

 3.2: Функция должна вернуть массив, состоящий из тех дочерних элементов следующим соседом которых является элемент с тегом P

 Пример:
 Представим, что есть разметка:
 <body>
 <div></div>
 <p></p>
 <a></a>
 <span></span>
 <p></p>
 </dody>

 findAllPSiblings(document.body) // функция должна вернуть массив с элементами div и span т.к. следующим соседом этих элементов является элемент с тегом P
 */
function findAllPSiblings(where) {
    let next_p = [];
    /*for (var i = 0; i < where.children.length; i++) {
        console.log( where.children[i] ); // DIV, UL, DIV, SCRIPT
    }*/
        for(let el of where.children){
            if(el.nextElementSibling && el.nextElementSibling.tagName == 'P'){
            console.log('cur: ', el.tagName);
                next_p.push( el);
            }
        }
    return next_p;
}