// ------------------------------------------------------------
// Daily Challenge: Tell the story
// What you will learn :
// Use DOM and forms
//
// Instructions
// Today, we will create a Mad Libs game.
// If you've never played this game, a mad lib is a game where you fill in a bunch of blank
// inputs with different word types (ie : noun, adjective, verb), and then a story is generated
// based on the words you chose, and sometimes the story is surprisingly funny.
// In this exercise you work with the HTML code presented below (see index.html).
//
// Follow these steps :
// Get the value of each of the inputs in the HTML file when the form is submitted.
// Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a "shuffle" button to the HTML file, when clicked the button should change the story
// currently displayed (but keep the values entered by the user). The user could click the button
// at least three times and get a new story. Display the stories randomly.
// ------------------------------------------------------------

const libForm = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

// The words of the user, saved for the shuffle button
let words = null;
let currentStoryIndex = -1;

// Each story is a function that uses the 5 words
const stories = [
  (w) => `${w.person} took a ${w.adjective} ${w.noun} to ${w.place} and started to ${w.verb} all night long.`,
  (w) => `In ${w.place}, nobody could ${w.verb} like ${w.person}, until a ${w.adjective} ${w.noun} showed up.`,
  (w) => `Every morning, ${w.person} wakes up in ${w.place}, grabs a ${w.adjective} ${w.noun} and tries to ${w.verb}.`,
  (w) => `The ${w.adjective} ${w.noun} of ${w.place} told ${w.person}: "You will never ${w.verb} here!"`,
];

function getWords() {
  const ids = ["noun", "adjective", "person", "verb", "place"];
  const values = {};
  for (const id of ids) {
    const value = document.getElementById(id).value.trim();
    if (value === "") {
      return null;
    }
    values[id] = value;
  }
  return values;
}

// Pick a random story, different from the one displayed
function displayRandomStory() {
  let index = Math.floor(Math.random() * stories.length);
  while (index === currentStoryIndex) {
    index = Math.floor(Math.random() * stories.length);
  }
  currentStoryIndex = index;
  storySpan.textContent = stories[index](words);
}

libForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const values = getWords();
  if (values === null) {
    storySpan.textContent = "Please fill in all the inputs.";
    return;
  }

  words = values;
  displayRandomStory();
});

// Bonus: new story with the same words
shuffleButton.addEventListener("click", function () {
  if (words === null) {
    storySpan.textContent = "Fill in the form and click on \"Lib it!\" first.";
    return;
  }
  displayRandomStory();
});
