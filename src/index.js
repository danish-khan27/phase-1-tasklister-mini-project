document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent form from refreshing the page

    const input = document.getElementById("new-task-description");
    const taskText = input.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;

      // Optional: Add a delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      input.value = ""; // clear the input after adding task
    }
  });
});
