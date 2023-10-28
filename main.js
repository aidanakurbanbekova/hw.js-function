//1) Математические расчеты и функции

//Создайте две функции, add и multiply; пусть каждая принимает
//по два аргумента. Функция add должна складывать аргументы
//и возвращать результат, а функция multiply — перемножать
//аргументы.
//  С помощью только этих двух функций вычислите следующее
//несложное выражение: 36325 * 9824 + 777

// function  add(num, sum){
//     const res = num + sum;
//     return res
// }
// const numSum = add(20, 30);
// console.log(numSum)

// function multiply(sum,num){
//     const res = num*sum;
//     return res
// }
// const sumNum = multiply(20,40)
// console.log(sumNum)

// function addSum(){
//     const res =  multiply(36325,9824)
//     const result = add(res,777)
//     return result
// }
// const qwerty = addSum()
// console.log(qwerty)

// 2) Сделайте функцию, которая возвращает квадрат числа.
// Число передается параметром
// function squareNumbers(a) {
//     return a * a
// }
// // const result = squareNumbers(3)
// console.log(squareNumbers(3))

// 3) Сделайте функцию, которая возвращает сумму двух чисел
//


// 4) Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function fm(a,b,c){
//     const res = a - b
//     const resalt = res /c
//     return resalt
// }
// const asd = fm(20,2,3)
// console.log(asd)

// 5) Сделайте функцию, которая принимает параметром
// число от 1 до 7, а возвращает день недели на русском языке.
function qwerty(a) {
    switch (a) {
        case 1:
            return "Понидельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресения";
        default:
            return "Ошибка"

    }
}
const asd = qwerty(4);
console.log(asd)