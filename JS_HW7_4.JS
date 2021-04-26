// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = document.querySelector("#value"),
numberCount = +counterValue.textContent,
decrement = document.getElementsByTagName("button")[0],
increment = document.getElementsByTagName("button")[1];

increment.addEventListener("click", () => {
    numberCount++;
    counterValue.textContent = numberCount;
});

decrement.addEventListener("click", () => {
  numberCount--;
  counterValue.textContent = numberCount;
});
