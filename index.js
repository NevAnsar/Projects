// Получаем элемент кнопки с id "calculate" и сохраняем его в переменной btn
const btn = document.getElementById("calculate");

// Получаем элемент для ввода счета по его id "bill" и сохраняем его в переменной billInput
const billInput = document.getElementById("bill");

// Получаем элемент для ввода процента чаевых по его id "tip" и сохраняем его в переменной tipInput
const tipInput = document.getElementById("tip");

// Получаем элемент для отображения общей суммы (total) по его id "total" и сохраняем его в переменной totalSpan
const totalSpan = document.getElementById("total");

// Объявляем функцию calculateTotal, которая будет вызываться при нажатии на кнопку
function calculateTotal() {
   // Получаем значение счета из поля ввода
   const billValue = billInput.value;

   // Получаем значение процента чаевых из поля ввода
   const tipValue = tipInput.value;

   // Вычисляем общую сумму, учитывая чаевые
   const totalValue = billValue * (1 + tipValue / 100);

   // Выводим результат на странице в элемент totalSpan
   totalSpan.innerText = totalValue;
}

// Добавляем обработчик события на кнопку, чтобы при ее нажатии вызывалась функция calculateTotal
btn.addEventListener("click", calculateTotal);
