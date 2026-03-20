const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');



function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // booton para eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');


    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}


// agregar el evento click al botón
addTaskBtn.addEventListener('click', addTask);

// event delegation
taskList.addEventListener('click', (event) => {
    const li = event.target.closest('li');// elemento más cercano

    if(!li) return;
    if(event.target.classList.contains('delete-btn')) {
        li.remove();

    }else{
        li.classList.toggle('completed');
    }
});