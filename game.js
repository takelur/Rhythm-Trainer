let notes = document.querySelectorAll('.note');
let gameContainer = document.querySelector('#game');
let selectedRhythms = []; // array to store selected rhythms

// code to define note durations goes here

for (let note of notes) {
  note.addEventListener('click', function() {
    let selectedNote = this;
    gameContainer.innerHTML = ""; // clear the game container

    if (selectedNote.classList.contains('selected')) {
      // deselect the rhythm if it is already selected
      selectedNote.classList.remove('selected');
      let index = selectedRhythms.indexOf(selectedNote.textContent);
      selectedRhythms.splice(index, 1);
    } else {
      // select the rhythm if it is not already selected
      selectedNote.classList.add('selected');
      selectedRhythms.push(selectedNote.textContent);
    }
  });
}

function playNextNote() {
  let numRhythms = selectedRhythms.length;
  if (numRhythms === 0) {
    // if no rhythms are selected, choose a random rhythm from all options
    let numNotes = notes.length;
    let randomIndex = Math.floor(Math.random() * numNotes);
    let selectedNote = notes[randomIndex];
  } else {
    // if one or more rhythms are selected, choose a random rhythm from the selected options
    let randomIndex = Math.floor(Math.random() * numRhythms);
    let selectedRhythm = selectedRhythms[randomIndex];
    let selectedNote = document.querySelector(`.note:contains(${selectedRhythm})`);
  }

  switch (selectedNote.textContent) {
    case "Quarter Note Pause":
      setTimeout(playNextNote, quarterNoteDuration);
      break;
    case "Eighth Note Pause":
      setTimeout(playNextNote, eighthNoteDuration);
      break;
    // other cases for other note durations and pause options go here
    default:
      playNote(selectedNote);
  }
}
