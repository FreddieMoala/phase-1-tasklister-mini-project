document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let task = document.createElement("li");
    task.innerText = event.target[0].value;
    document.getElementById("tasks").appendChild(task);
    event.target[0].value = "";
  });
});
