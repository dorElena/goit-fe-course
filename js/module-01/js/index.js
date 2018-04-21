/*
Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  1. Кол-во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6.
  2. Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест, 
    результат сохранить в переменную.
  3. Необходимо проверить является ли введенные данные целым положительным числом. 
    Вывести alert с текстом "Ошибка ввода" в случае ошибочного ввода и прекратить выполнение скрипта.
  4. В случае валидного ввода, последовательно проверить кол-во мест в группах, и кол-во необходимых мест введенных пользователем.
    Подсказка: начните с самой маленькой группы!
  5. Если была найдена группа в которой количество мест больше либо равно необходимому, вывести пользователю сообщение через confirm,
    что есть место в группе такой-то, согласен ли пользоваетель быть в этой группе?
  6. Если ответ да, уменьшаем число свободных мест на число участников группы и выводим alert с текстом,
    'Приятного путешествия в группе <имя группы>'.
  7. Если ответ нет, выводим alert с текстом "Нам очень жаль, приходите еще!".
  8. Если мест нигде нет, выводим alert с сообщением 'Извините, мест нет.'
*/
const GROUP_SHARM = 'SHARM';
const GROUP_HURGADA = 'HURGADA';
const GROUP_TABA = 'TABA';

let seats_sharm = 15;
let seats_hurgada = 25;
let seats_taba = 6;

const userInput = prompt('Введите, пожалуйста, число необходимых мест', '3');
const seatsGroup = Number(userInput);

const isValidInput = userInput !== null && !Number.isNaN(seatsGroup);

if (isValidInput) {
  let seatAvailability;
  if (seatAvailability = seatsGroup >= 1 && seatsGroup<=6) {
  var qw = confirm(`Есть место в группе ${GROUP_TABA}. Вы согласны?`);
    seatAvailability = qw === true ? alert (`Приятного путешествия в группе ${GROUP_TABA}!
    *колличество оставшихся мест в группе: ${seats_taba = seats_taba - seatsGroup}`) : 
    alert('Нам очень жаль, приходите еще!');
  }
  else if (seatAvailability = seatsGroup > 6 && seatsGroup <= 15) {
    var qw = confirm(`Есть место в группе ${GROUP_SHARM}. Вы согласны?`);
      seatAvailability = qw === true ? alert(`Приятного путешествия в группе ${GROUP_SHARM}!
      *колличество оставшихся мест в группе: ${seats_sharm = seats_sharm - seatsGroup}`) :
      alert('Нам очень жаль, приходите еще!');
  }
  else if (seatAvailability = seatsGroup >15 && seatsGroup <= 25) {
    var qw = confirm(`Есть место в группе ${GROUP_HURGADA}. Вы согласны?`);
      seatAvailability = qw === true ? alert(`Приятного путешествия в группе ${GROUP_HURGADA}!
      *колличество оставшихся мест в группе: ${seats_hurgada = seats_hurgada - seatsGroup}`) :
      alert('Нам очень жаль, приходите еще!');
  }
  else {
    alert('Нам очень жаль, такого количества мест нет!');
  }
} else {
   alert('Ошибка ввода');
} 