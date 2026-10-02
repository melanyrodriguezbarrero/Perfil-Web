const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const count = document.querySelector("#task-count");
const empty = document.querySelector("#empty");
const clearButton = document.querySelector("#clear-completed");

let tasks = [];
try { tasks = JSON.parse(localStorage.getItem("melany-tasks") || "[]"); } catch { tasks = []; }

function save() {
  localStorage.setItem("melany-tasks", JSON.stringify(tasks));
}
function render() {
  list.replaceChildren();
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task${task.done ? " done" : ""}`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = task.done;
    check.setAttribute("aria-label", `Marcar ${task.text} como completada`);
    check.addEventListener("change", () => {
      task.done = check.checked;
      save(); render();
    });
    const span = document.createElement("span");
    span.textContent = task.text;
    const del = document.createElement("button");
    del.type = "button"; del.className = "delete"; del.textContent = "Eliminar";
    del.addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);
      save(); render();
    });
    li.append(check, span, del);
    list.append(li);
  });
  const pending = tasks.filter(task => !task.done).length;
  count.textContent = `${tasks.length} ${tasks.length === 1 ? "tarea" : "tareas"} · ${pending} pendientes`;
  empty.hidden = tasks.length > 0;
}
form.addEventListener("submit", event => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  tasks.push({id: Date.now(), text, done: false});
  save(); render(); input.value = ""; input.focus();
});
clearButton.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.done);
  save(); render();
});
render();
