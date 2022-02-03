// Define our vars
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('#clear-tasks');

// Load event listeners
loadeventHandle();

function loadeventHandle() {
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    filter.addEventListener('keydown', filterTasks);
    clearBtn.addEventListener('click', removeTasks);
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add Task');
    } else {
        // Create li
        const li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        // Add text node
        li.appendChild(document.createTextNode(taskInput.value));
        // Create link
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item';
        // Add icon
        link.innerHTML = '<i class="fas fa-trash-alt float-right"></i>';
        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);

        storeInLocalStorage(taskInput.value);

        // Clear input
        taskInput.value = '';
    }

    e.preventDefault();    
}

// Get Tasks
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
         // Create li
         const li = document.createElement('li');
         // Add class
         li.className = 'list-group-item';
         // Add text node
         li.appendChild(document.createTextNode(task));
         // Create link
         const link = document.createElement('a');
         // Add class
         link.className = 'delete-item';
         // Add icon
         link.innerHTML = '<i class="fas fa-trash-alt float-right"></i>';
         // Append link to li
         li.appendChild(link);
 
         // Append li to ul
         taskList.appendChild(li);
    });
}

// Save in local storage
function storeInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    // Remove from local storage
    removeTaskLocalStorage(e.target.parentElement.parentElement);
}

// Remove from LS
function removeTaskLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

   tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
   });
   
   localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Filter task
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.list-group-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

// Remove Tasks
function removeTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Remove all tasks form LS
    removeAllTasks();
}

function removeAllTasks() {
    localStorage.clear();
}