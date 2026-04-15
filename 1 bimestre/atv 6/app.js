const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    const texto = input.value.trim();

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;

        list.appendChild(li);

        input.value = "";
    }
});

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});