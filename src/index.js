document.addEventListener("DOMContentLoaded", () => {
  // your code here

    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents page from refreshing

      const inputField = document.getElementById("new-task-description");
      const taskText = inputField.value.trim();

      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
  //delete butoon
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.addEventListener("click", () => listItem.remove());

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
      }

      inputField.value = "";
  });
})