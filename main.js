/* Задание № 1 */

const title = document.createElement("h1")
title.textContent = "Hello World !"
document.body.appendChild(title)

/* Задание № 2 */

const orderList = document.createElement("ol")
document.body.appendChild(orderList)

const employees = [
	{ firstName: "Иван", lastName: "Иванов" },
	{ firstName: "Максим", lastName: "Максимов" },
	{ firstName: "Петр", lastName: "Петров" },
	{ firstName: "Алексей", lastName: "Алексеев" },
	{ firstName: "Дмитрий", lastName: "Дмитриев" },
]

for (const employee of employees) {
	const listItem = document.createElement("li")
	listItem.textContent = `${employee.firstName} ${employee.lastName}`
	orderList.appendChild(listItem)
}

/* Задание № 3 */

const square = document.createElement("div")
square.style.width = "50px"
square.style.height = "50px"
square.style.backgroundColor = "red"
square.className = "square"
document.body.appendChild(square)

let isClicked = false
square.addEventListener("click", () => {
	if (!isClicked) {
		square.style.borderRadius = "100%"
		isClicked = true
	} else {
		square.style.borderRadius = 0
		isClicked = false
	}
})

/* Задание № 4 */

const calculator = {
	sum(a, b) {
		return console.log(`Сумма ваших чисел ${a} и ${b}: `, a + b)
	},
	sub(a, b) {
		return console.log(`Разность ваших чисел ${a} и ${b}: `, a - b)
	},
	mul(a, b) {
		return console.log(`Произведение ваших чисел ${a} и ${b}: `, a * b)
	},
	div(a, b) {
		return console.log(`Деление ваших чисел ${a} и ${b}: `, a / b)
	},
	exponent(a, b) {
		return console.log(`Возведение вашего числа ${a} в степень ${b}: `, a ** b)
	},
	percent(a, b) {
		return console.log(`Процент от ваших чисел ${a} и ${b}: `, (a * b) / 100)
	},
}

calculator.sum(1, 2)
calculator.sub(2, 2)
calculator.mul(3, 2)
calculator.div(10, 2)
calculator.exponent(10, 2)
calculator.percent(100, 50)

/* Задание № 5 */

const input = document.createElement("input")
const button = document.createElement("button")

button.textContent = "Сохранить"

document.body.appendChild(input)
document.body.appendChild(button)

button.addEventListener("click", () => {
	localStorage.setItem("Text", input.value)
	input.value = ""
	setTimeout(() => {
		console.log(localStorage.getItem("Text"))
		localStorage.removeItem("Text")
	}, 2000)
})
