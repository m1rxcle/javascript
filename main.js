const createInput = document.getElementById("create-input")
const createBtn = document.getElementById("create-btn")
const noteList = document.getElementById("note-list")
const notesLabel = document.getElementById("notes-label")
const emptyDiv = document.createElement("div")

const notes = []

createBtn.onclick = function () {
	if (createInput.value.length === 0) {
		return
	}
	notes.push(createInput.value)
	renderNote()
	createInput.value = ""
}

function renderNote() {
	noteList.innerHTML = ""
	notes.map((note, index) => {
		if (localStorage.getItem(`${index}`) === null) {
			localStorage.setItem(`${index}`, note)
		}
		return noteList.insertAdjacentHTML(
			"afterbegin",
			`
			 <li  id="note" class="notes-list__item">
				<span id="note-name">${note}</span>
				<div class="item__actions">
					<div data-index="${index}" data-type="delete" id="delete-note" class="delete_action">
						<img data-index="${index}" data-type="delete" src="/icons/trash.svg" />
					</div>
					<div id="change-note" data-index="${index}" data-type="change" class="change_action">
						<img data-index="${index}" data-type="change" src="/icons/pen-line.svg" />
					</div>
				</div>
			</li>
			
			`
		)
	})

	if (notes.length > 0) {
		notesLabel.textContent = `Ваш список заметок (${notes.length})`
	} else {
		notesLabel.textContent = `Ваш список заметок пуст`
		emptyDiv.classList.add("empty-block")
		emptyDiv.innerHTML = `
			<h3 class="empty-block_title">У вас пока что нет ни одной заметки</h3>
			<p class="empty-block_subtitle">Вы можете добавить заметку введя ее название и нажав на кнопку "Добавить"</p>
		`
		noteList.appendChild(emptyDiv)
	}
}

noteList.onclick = function (e) {
	if (e.target.dataset.index) {
		const index = parseInt(e.target.dataset.index)
		const type = e.target.dataset.type

		if (type === "delete") {
			const noteItems = document.querySelectorAll(".notes-list__item")
			const noteItem = noteItems[noteItems.length - 1 - index]
			noteItem.classList.add("fade-out")

			noteItem.addEventListener(
				"animationend",
				() => {
					notes.splice(index, 1)
					localStorage.clear()
					renderNote()
				},
				{ once: true }
			)
		} else if (type === "change") {
			const changeNoteInput = prompt(`Введите новое название для заметки: "${notes[index]}"`)
			if (changeNoteInput !== null && changeNoteInput !== "") {
				notes[index] = changeNoteInput
				localStorage.setItem(`${index}`, changeNoteInput)
				renderNote()
			}
		}
	}
}

function getNotesFromStorage() {
	notes.length = 0
	const keys = Object.keys(localStorage).sort((a, b) => Number(a) - Number(b))
	for (const key of keys) {
		const value = localStorage.getItem(key)
		notes.push(value)
	}
	renderNote()
}

getNotesFromStorage()
