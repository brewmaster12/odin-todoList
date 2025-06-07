function bringUpTodoForm() {
    // Create dialog
    const todoDialog = document.createElement("dialog");
    todoDialog.id = "todoDialog";

    // Create form
    const todoForm = document.createElement("form")
    todoForm.id = "todoForm"

    // Create form elements
    const todoNameLabel = document.createElement('label');
    todoNameLabel.textContent = 'Enter todo:';
    const todoNameInput = document.createElement('input');
    todoNameInput.type = 'text';
    todoNameInput.id = 'todoName';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'text';
    dueDateInput.id = 'dueDate';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    const priorityInput = document.createElement('input');
    priorityInput.type = 'text';
    priorityInput.id = 'priority';

    // Submit button
    const submitTodoBtn = document.createElement("button");
    submitTodoBtn.textContent = "Submit";
    submitTodoBtn.type = "submit";
    submitTodoBtn.id = "submitTodoBtn";

    // Assemble form
    todoForm.appendChild(todoNameLabel);
    todoForm.appendChild(todoNameInput);
    todoForm.appendChild(descriptionLabel);
    todoForm.appendChild(descriptionInput);
    todoForm.appendChild(dueDateLabel);
    todoForm.appendChild(dueDateInput);
    todoForm.appendChild(priorityLabel);
    todoForm.appendChild(priorityInput);
    todoForm.appendChild(submitTodoBtn);

    // Append form to dialog
    todoDialog.appendChild(todoForm);

    // Add dialog to body
    document.body.appendChild(todoDialog);

    // Show the dialog
    todoDialog.showModal();

    // Form submission
    submitTodoBtn.addEventListener("click", (event) => {
        event.preventDefault();
        todoDialog.close();
        submitTodo(todoName.value, description.value, dueDate.value, priority.value);
    });
}

/* export {bringUpTodoForm} */