// <!--     
// Задание 1
// В HTML есть список категорий ul#categories. -->
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
let categories = document.querySelectorAll('li.item')
console.log(`В списку ${categories.length} категорії`); 

let listItems = document.querySelectorAll("li.item"),
  titles = document.querySelectorAll("h2");

// for(const item of indx) {
//   let ul = item.querySelectorAll("ul");
//   console.log(`Категория: ${titles[indx].innerText} - Количество элементов: ${ul.children.length}`);
// }

listItems.forEach((item , indx) => {
  let ul = item.querySelector('ul');
  console.log(`Категорія ${titles[indx].innerText} - Кількість елементів: ${ul.children.length}`);

})