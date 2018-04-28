/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте 
      цикл while или do...while.
      
    - Делать проверку того, что пользователь ввел именно число, а не произвольный 
      набор символов, не обязательно, но желательно. В случае некорректного ввода
      просто выдайте alert с текстом 'Было введено не число, попробуйте еще раз',
      при этом результат prompt записывать в массив чисел не нужно, после чего 
      снова пользователю предлагается ввести число в prompt.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - Вывести alert с текстом `Общая сумма чисел равна ${сумма}`
*/
let userInput;
const numbers = [];

while (userInput !== null) {
  userInput = prompt("Введите число");
  const isValidInput =
    userInput != "" && !Number.isNaN(Number(userInput));
  if (isValidInput) {
    numbers.push(Number(userInput));
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}

console.log(numbers);

let sum = 0;
for (let i = 0, max = numbers.length; i < max; i += 1) {
  sum = sum + numbers[i];
}

alert(`Общая сумма чисел равна ${sum}`);