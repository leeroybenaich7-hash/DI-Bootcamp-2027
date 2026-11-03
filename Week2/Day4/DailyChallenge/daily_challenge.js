// ------------------------------------------------------------
// Daily Challenge: To Do List
// What you will learn :
// DOM Events
// DOM Tree
//
// Instructions
// Recreate the To Do list above :
// Create an HTML, CSS and JS file.
//
// In the HTML file
// Create a form with one input type="text" and a "Submit" button.
// Add an empty div below the form : <div class="listTasks"></div>
//
// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];
// Create a function called addTask(). As soon as the user clicks on the button:
//   check that the input is not empty,
//   then add it to the array (ie. add the text of the task)
//   then add it to the DOM, below the form (in the <div class="listTasks"></div>).
//   Each new task added should have (starting from left - check the image at the top of the page)
//     a "X" button. Use font awesome for the "X" button.
//     an input type="checkbox". The label of the input is the task added by the user.
//
// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done
// (a boolean - false by default).
// Each new task object should have a task_id, starting from 0, and a data-task-id attribute
// whose value is the same as the task_id. Check out the documentation on data-* attributes.
// Create a function named doneTask(), that as soon as the user clicks on the "checkbox" input,
// changes the done property from false to true in the object, and from black to crossed red in the DOM.
//
// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the "X" button,
// deletes that specific task from the array listTasks.
// ------------------------------------------------------------

// Bonus I: tasks is an array of task objects { task_id, text, done }
const tasks = [];
let nextId = 0;

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const listTasks = document.querySelector(".listTasks");

function addTask(event) {
  event.preventDefault();

  const text = input.value.trim();
  if (text === "") {
    alert("Please write a task first.");
    return;
  }

  // Add the task to the array
  const task = { task_id: nextId, text: text, done: false };
  tasks.push(task);
  nextId++;

  // Add the task to the DOM
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.setAttribute("data-task-id", task.task_id);

  // "X" button with Font Awesome
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteButton.addEventListener("click", deleteTask);

  // Checkbox + label
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task-" + task.task_id;
  checkbox.addEventListener("change", doneTask);

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = task.text;

  taskDiv.appendChild(deleteButton);
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  listTasks.appendChild(taskDiv);

  input.value = "";
}

// Bonus I: mark a task as done (crossed red) or not done again
function doneTask(event) {
  const taskDiv = event.target.parentElement;
  const id = Number(taskDiv.getAttribute("data-task-id"));
  const task = tasks.find(t => t.task_id === id);

  task.done = event.target.checked;
  if (task.done) {
    taskDiv.classList.add("done");
  } else {
    taskDiv.classList.remove("done");
  }
}

// Bonus II: delete a task from the array and from the DOM
function deleteTask(event) {
  const taskDiv = event.currentTarget.parentElement;
  const id = Number(taskDiv.getAttribute("data-task-id"));
  const index = tasks.findIndex(t => t.task_id === id);

  tasks.splice(index, 1);
  taskDiv.remove();
}

form.addEventListener("submit", addTask);
