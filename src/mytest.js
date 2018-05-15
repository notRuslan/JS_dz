/*
 Задание 1:

 1.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива

 1.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false

function isAllTrue(array, fn) {
    try {
        if (array.length === 0 || Object.prototype.toString.call(array) =='[object Array]' ) {
            throw new Error('empty array');
        }
        if (typeof  fn !== 'function') {
            throw new Error('fn is not a function');
        }


    } catch (e) {
        console.log(e.message);
        return false;
    }

    let result = false;
    for (let i = 0; i < array.length; i++) {
        result = fn(array[i]);
        if (!result) {
            return false;
        }
    }
    return true;
}

console.log(isAllTrue(9, n => n < 10));
console.log(isAllTrue([1, 2, 3, 4, 5], n => n < 10));
console.log(isAllTrue([1, 2, 3, 4, 5], false));
*/

