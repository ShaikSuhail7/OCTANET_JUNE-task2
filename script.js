// Get the necessary elements from the DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task to the list
function addTask() {
  const taskText = taskInput.value;

  if (taskText) {
    const li = document.createElement("li");
    li.innerText = taskText;
    li.addEventListener("click", toggleTask);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Function to toggle the completion status of a task
function toggleTask() {
  this.classList.toggle("completed");
}
