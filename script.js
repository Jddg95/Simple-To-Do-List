const textInput = document.getElementById("text-input");
const submitButton = document.getElementById("submit-btn");
const taskList = document.getElementById("task-list");

submitButton.addEventListener("click", function () {
  const task = textInput.value; // gets value from input field
  console.log("task");
  const newTaskItem = document.createElement("li"); // Creates a new list item element
  newTaskItem.innerText = task; //adds task text to list item.
  taskList.appendChild(newTaskItem); // adds the new list item to task list (ul)
  textInput.value = ""; // clear text input
});
