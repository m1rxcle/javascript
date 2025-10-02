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
