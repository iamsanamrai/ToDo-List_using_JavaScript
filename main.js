function addTodo() {
    var input = document.getElementById("todoInput");
    var task = input.value;

    if (!task) {
        alert("Please write some task.");
        return;
    }

    if (task !== '') {
      const todoItem = document.createElement("div");
      todoItem.classList.add("tasks");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
        todoItem.classList.toggle("tasks");
      });

      todoItem.appendChild(checkbox);
  
      const label = document.createElement("label");
      label.appendChild(document.createTextNode(task));
      todoItem.appendChild(label);
  
      document.getElementById("tasks").appendChild(todoItem);
      input.value = "";
    }
  }
  