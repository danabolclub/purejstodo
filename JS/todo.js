const field = document.querySelector('.field');

function createTask(value) {
	const task = document.createElement("div");
	task.textContent = value;
	return task;
}

function addTask() {
	const newTask = createTask(field.value);
	document.body.appendChild(newTask);
}

