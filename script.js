const textInput = document.getElementById("text-input");
const submitButton = document.getElementById("submit-btn");
const taskList = document.getElementById("task-list");

submitButton.addEventListener("click", function () {
  const task = textInput.value; // gets value from input field
  console.log("task");
});
