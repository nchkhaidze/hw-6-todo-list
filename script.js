import TodoList from './TodoList.js';
import Task from './Task.js';

// interface elements
const list = new TodoList(document.querySelector('#todoList'));
const taskInput = document.querySelector('#task-description');
const deadlineInput = document.querySelector('#deadline');
const addTodoButton = document.querySelector('#addTodo');
const filterByCompleteSelect = document.querySelector('#filter-complete');
const filterByDeadlineSelect = document.querySelector('#filter-deadline');
const filterButton = document.querySelector('#filter-button');
const cancelFilterButton = document.querySelector('#unfilter-button');

// event listeners
addTodoButton.addEventListener('click', addTask);
filterButton.addEventListener('click', filterTasks);
cancelFilterButton.addEventListener('click', cancelFilters);

// event listener functions
function addTask() {
    if (!taskInput.value || !deadlineInput.value) {
        return;
    }

    list.addTodo(new Task(taskInput.value, new Date(Date.parse(deadlineInput.value)), list));

    taskInput.value = '';
    deadlineInput.value = '';
}

function filterTasks(event) {
    let date = filterByDeadlineSelect.value;
    let complete = filterByCompleteSelect.value;

    if (!date && complete === 'none') {
        return;
    }

    list.filterTodos(complete, date);

    filterByDeadlineSelect.value = '';
    filterByCompleteSelect.value = 'none';
}

function cancelFilters() {
    if (list.tasks.length > 0) {
        list.displayAll();
    }
}




