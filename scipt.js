const API_KEY = "275d58779ccf4e22af03e792e8819fff"; // Ключ API для доступа к Spoonacular API
const recipeListEl = document.getElementById("recipe-list"); // Получение элемента списка рецептов по его идентификатору

function displayRecipes(recipes) {
  recipeListEl.innerHTML = ""; // Очистка содержимого списка перед добавлением новых рецептов
  recipes.forEach((recipe) => { // Перебор массива рецептов
    const recipeItemEl = document.createElement("li"); // Создание элемента списка
    recipeItemEl.classList.add("recipe-item"); // Добавление класса к элементу списка

    recipeImageEl = document.createElement("img"); // Создание элемента изображения
    recipeImageEl.src = recipe.image; // Установка источника изображения
    recipeImageEl.alt = "recipe image"; // Установка альтернативного текста для изображения

    recipeTitleEl = document.createElement("h2"); // Создание заголовка второго уровня
    recipeTitleEl.innerText = recipe.title; // Установка текста заголовка

    recipeIngredientsEl = document.createElement("p"); // Создание элемента для списка ингредиентов
    recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}
    `; // Установка HTML содержимого для списка ингредиентов

    recipeLinkEl = document.createElement("a"); // Создание элемента ссылки
    recipeLinkEl.href = recipe.sourceUrl; // Установка ссылки на источник рецепта
    recipeLinkEl.innerText = "View Recipe"; // Установка текста ссылки

    recipeItemEl.appendChild(recipeImageEl); // Добавление изображения в элемент списка
    recipeItemEl.appendChild(recipeTitleEl); // Добавление заголовка в элемент списка
    recipeItemEl.appendChild(recipeIngredientsEl); // Добавление списка ингредиентов в элемент списка
    recipeItemEl.appendChild(recipeLinkEl); // Добавление ссылки в элемент списка
    recipeListEl.appendChild(recipeItemEl); // Добавление элемента списка в список рецептов
  });
}

async function getRecipes() {
  const response = await fetch( // Отправка запроса к Spoonacular API
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json(); // Получение данных о рецептах в формате JSON

  return data.recipes; // Возвращение массива рецептов
}

async function init() {
  const recipes = await getRecipes(); // Получение списка рецептов
  displayRecipes(recipes); // Отображение рецептов на странице
}

init(); // Вызов функции инициализации при загрузке страницы
