// Elements
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");


// Functions


function generateId() {
    return Math.floor(Math.random() * 5000);
}


// Events
addNoteBtn.addEventListener("click", () => addNote())

