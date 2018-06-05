/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
 loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
    return new Promise(

    );
}


function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('till');
            resolve();
            console.log('resolved');
        }, ms)
    });

}

/*const prom = delay(2000);
prom
    .then(() => console.log(1))
    .then(() => {
        setTimeout(() => console.log(2), 3000)
    })
    .then(() => {
        setTimeout(() => console.log(3), 2000)
    });*/
