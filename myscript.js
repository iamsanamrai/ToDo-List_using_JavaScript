function addTodo() {
  var input = document.getElementById("todoInput");
  var task = input.value;
  if (task !== '') {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      li.classList.toggle("completed");
    });
    li.appendChild(checkbox);
    var label = document.createElement("label");
    label.appendChild(document.createTextNode(task));
    li.appendChild(label);
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
}
