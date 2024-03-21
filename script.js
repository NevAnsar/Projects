// Получаем ссылку на элемент с подсказкой
const hint = document.getElementById("hint");

// Получаем ссылки на элементы, отображающие количество попыток и список угаданных чисел
const noOfGuessesRef = document.getElementById("no-of-guesses");
const guessedNumsRef = document.getElementById("guessed-nums");

// Получаем ссылку на кнопку перезапуска игры
const restartButton = document.getElementById("restart");

// Получаем ссылку на элемент с игровым контентом
const game = document.getElementById("game");

// Получаем ссылку на поле ввода числа и кнопку проверки
const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn");

// Объявляем переменные для хранения ответа, количества попыток и списка угаданных чисел
let answer, noOfGuesses, guessedNumsArr;

// Функция play() обрабатывает действия пользователя при проверке числа
const play = () => {
  const userGuess = guessInput.value;
  // Проверяем корректность введенного числа
  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  // Добавляем угаданное число в список угаданных чисел и увеличиваем количество попыток
  guessedNumsArr.push(userGuess);
  noOfGuesses += 1;
  // Если число не угадано, выводим подсказку
  if (userGuess != answer) {
    if (userGuess < answer) {
      hint.innerHTML = "Too low. Try Again!";
    } else {
      hint.innerHTML = "Too high. Try Again!";
    }
    // Обновляем отображение количества попыток и списка угаданных чисел
    noOfGuessesRef.innerHTML = `<span>No. Of Guesses:</span> ${noOfGuesses}`;
    guessedNumsRef.innerHTML = `<span>Guessed Numbers are: </span>${guessedNumsArr.join(",")}`;
    // Применяем анимацию к подсказке
    hint.classList.remove("error");
    setTimeout(() => {
      hint.classList.add("error");
    }, 10);
  } else { // Если число угадано
    // Выводим сообщение об успехе и скрываем игровой контент, показываем кнопку перезапуска
    hint.innerHTML = `Congratulations!<br>The number was <span>${answer}</span>.<br>You guessed the number in <span>${noOfGuesses} </span>tries.`;
    hint.classList.add("success");
    game.style.display = "none";
    restartButton.style.display = "block";
  }
};

// Функция init() инициализирует начальное состояние игры
const init = () => {
  // Генерируем случайное число, сбрасываем счетчики и списки
  answer = Math.floor(Math.random() * 100) + 1;
  noOfGuesses = 0;
  guessedNumsArr = [];
  // Обновляем отображение количества попыток и списка угаданных чисел
  noOfGuessesRef.innerHTML = "No. Of Guesses: 0";
  guessedNumsRef.innerHTML = "Guessed Numbers are: None";
  // Сбрасываем поле ввода и стили подсказки
  guessInput.value = "";
  hint.classList.remove("success", "error");
};

// Обработчик события для ввода числа по нажатию Enter
guessInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) { // Если нажат Enter
    event.preventDefault();
    play(); // Запускаем игру
  }
});

// Обработчик события для кнопки перезапуска игры
restartButton.addEventListener("click", () => {
  game.style.display = "grid"; // Показываем игровой контент
  restartButton.style.display = "none"; // Скрываем кнопку перезапуска
  hint.innerHTML = ""; // Очищаем подсказку
  hint.classList.remove("success"); // Удаляем класс успеха
  init(); // Инициализируем игру заново
});

// Обработчик события для кнопки проверки числа
checkButton.addEventListener("click", play);

// Обработчик события для события загрузки страницы
window.addEventListener("load", init);
