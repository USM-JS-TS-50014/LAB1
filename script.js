alert("Этот код выполнен из внешнего файла!");
console.log("Сообщение в консоли");

name = "Eduard";
birthYear = 2004;
isStudent = true;

console.log(name);
console.log(birthYear);
console.log(isStudent);

let score = prompt("Введите ваш балл:");
if (score >= 90) {
	console.log("Отлично!");
} else if (score >= 70) {
	console.log("Хорошо");
} else {
	console.log("Можно лучше!");
}

for (let i = 1; i <= 5; i++) {
	console.log(`Итерация: ${i}`);
}

// Чем отличается var от let и const?
// var - до 2015 года, единственный способ описать переменную (уже deprecated). Глобальная область видимости
// let - после 2015 года, локальная область видимости
// const - описание констант. Переменные, не изменяемые в ходе выполнения программы