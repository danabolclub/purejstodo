const field = document.querySelector('.field');
var arr = [];
var lastnum = 0;

function createTask() {
	lastnum++;
	arr.push({
		'number': lastnum,
		'text': field.value,
		'checked': false
	});
	field.value = '';
	refreshList();
}

function deleteTask() {
	var tasklist = document.querySelectorAll('div input');
	for(var i = 0; i < tasklist.length; i++) {
		if (tasklist[i].type == 'checkbox') {
			arr.find(elem => elem.number == i).checked = tasklist[i].checked;
    	}
  	}
	refreshList();
}

function logArray() {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}


function refreshList() {
	document.body.children[document.body.children.length - 2].remove();
	const list = document.createElement('div');
	list.className = 'list';
	//task.class = '123123123';
	document.body.children[document.body.children.length - 2].after(list);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].checked == false) {
			checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.id = arr[i].number;
			label = document.createElement('label');
			label.textContent = arr[i].text;
			br = document.createElement('br');
			document.body.children[document.body.children.length - 2].append(checkbox, label, br);
		}
	}


}