const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  if (taskInput.value.trim() === "") return;
  li.innerText = taskInput.value;

  //complete item

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.classList.add("utility-btn");
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };
  li.appendChild(completeBtn);

  //edit item
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("utility-btn");
  li.appendChild(editBtn);

  //delete item
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.classList.add("utility-btn");
  li.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    li.remove();
  };

  taskList.appendChild(li);

  taskInput.value = "";
});

//search/filter functionality

function filterTasks() {
  const searchInput = document.getElementById("searchInput");
  const input = searchInput.value;
  //   console.log(input);

  const items = document.querySelectorAll("#taskList li");
  //   console.log(items);

  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}
