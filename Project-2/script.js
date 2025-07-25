// Contact form submission with validation feedback
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();

  if (name === "" || email === "") {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  showMessage("Thank you for contacting us!", "success");
  contactForm.reset();
});

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = "";
  formMessage.classList.add(type === "success" ? "success" : "error");
  formMessage.classList.remove("hidden");
  setTimeout(() => {
    formMessage.classList.add("hidden");
  }, 3000);
}

// To-Do List functionality with localStorage persistence
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = "task-text";
    span.addEventListener("click", () => toggleTask(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  tasks.push({ text: taskText, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initial render
renderTasks();
