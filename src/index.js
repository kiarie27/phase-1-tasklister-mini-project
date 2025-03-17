document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the task description from the input field.
    const taskText = taskInput.value;

    // Only add a task if the text is not empty.
    if (taskText.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Append the new task to the task list.
      taskList.appendChild(listItem);

      // Clear the input field after adding the task.
      taskInput.value = '';
    }
  });
});
