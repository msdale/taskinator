var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("input[name='task-type']").value;

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create a div to hold task ifo and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
