// Establish variables
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// assigns a variable to a function to recall it easier later
var createTaskHandler = function() {
  var listItemEl = document.createElement ("li"); // createElement creates HTML elements via Javascript
  listItemEl.className = "task-item"; // assigns the new li with a class task-item
  listItemEl.textContent = "This is a new task."; // placeholder text for your new li
  tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);