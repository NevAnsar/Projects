// Получаем элемент кнопки с id "btn" и сохраняем его в переменной btn
const btn = document.getElementById("btn");

// Получаем элемент с днем рождения по его id "birthday" и сохраняем его в переменной birthday
const birthday = document.getElementById("birthday");

// Получаем элемент с результатом по его id "result" и сохраняем его в переменной result
const result = document.getElementById("result");

// Объявляем функцию calculateAge, которая будет вызываться при нажатии на кнопку
function calculateAge() {
   // Получаем значение дня рождения из поля ввода
   const birthdayValue = birthday.value;

   // Проверяем, если поле ввода дня рождения пустое
   if (birthdayValue === "") {
      // Выводим предупреждение, если поле не заполнено
      alert("Please enter your birthday!");
   } else {
      // Вызываем функцию getAge с передачей ей значения дня рождения
      const age = getAge(birthdayValue);
      
      // Выводим результат на странице в элемент result
      result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
   }
}

// Объявляем функцию getAge, которая принимает день рождения в формате "гггг-мм-дд"
function getAge(birthdayValue) {
   // Получаем текущую дату
   const currentDate = new Date();

   // Создаем объект даты из значения дня рождения
   const birthdayDate = new Date(birthdayValue);

   // Вычисляем разницу в годах между текущей датой и днем рождения
   let age = currentDate.getFullYear() - birthdayDate.getFullYear();

   // Проверяем, прошел ли уже день рождения в текущем году
   const month = currentDate.getMonth() - birthdayDate.getMonth();
   if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
      age--;
   }

   // Возвращаем вычисленный возраст
   return age;
}

// Добавляем обработчик события на кнопку, чтобы при ее нажатии вызывалась функция calculateAge
btn.addEventListener("click", calculateAge);
