/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Volo'
const surname = 'Klim'
const job = 'engineer'

const description = 'My name is ' + myName + ' ' + surname + ' I am an ' + job

console.log(description)

const descriptionTypeTwo  = `My name is ${myName} ${surname} I am an ${job}`
console.log(descriptionTypeTwo)
