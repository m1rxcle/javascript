/* Задание 1 */

class Oven {
	constructor(maxTemp) {
		this._maxTemp = maxTemp
	}
	get maxTemp() {
		return this._maxTemp
	}
	set maxTemp(value) {
		if (value < 0) return console.error("Температура не может быть меньше 0")

		if (value > 15) {
			return console.log("Температура не может быть больше 15 единиц")
		} else {
			this._maxTemp = value
		}
	}
}

const oven = new Oven(10)
console.log(oven.maxTemp)

/* Задание 2 */

class UpgradedOven extends Oven {
	constructor(maxTemp) {
		super(maxTemp)
		this.overHeat = 0
	}

	turnOn() {
		console.log("Печь включена...\nЗапуск нагрева печи...")
		const turnOnTimer = setInterval(() => {
			if (this.overHeat < this.maxTemp) {
				this.overHeat++
				this._logTemp()
			} else {
				console.log("Печь нагрелась до максимальной температуры...\nЗапуск выключения печи...")
				clearInterval(turnOnTimer)
				this.turnOff()
			}
		}, 500)
	}

	turnOff() {
		console.log("Печь выключена...\nСнижение температуры печи...")
		const turnOffTimer = setInterval(() => {
			if (this.overHeat > 0) {
				this.overHeat--
				this._logTemp()
			} else {
				console.log("Печь полностью остыла...\nПрекращение работы...")
				clearInterval(turnOffTimer)
			}
		}, 500)
	}

	_logTemp() {
		console.log(`Температура печи: ${this.overHeat} единиц`)
	}
}

const upgradedOven = new UpgradedOven(15)
console.log(upgradedOven.maxTemp)
upgradedOven.turnOn()

/* Задание 3 */

import { checkString } from "./checkString.js"
console.log(checkString("Привет Javascript!"))
