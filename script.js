document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const task = input.value.trim();

        if (task !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${task} <button>Delete</button>`;
            list.appendChild(listItem);

            const deleteButton = listItem.querySelector("button");
            deleteButton.addEventListener("click", () => {
                list.removeChild(listItem);
            });

            input.value = "";
            input.focus();
        }
    });
});
