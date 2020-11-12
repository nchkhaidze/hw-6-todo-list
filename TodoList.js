export default class TodoList {
    constructor(body) {
        this.body = body;
        this.tasks = [];
    }
  
    addTodo(task) {
        this.tasks.push(task);
        this.body.prepend(task.body);
    }
  
    removeTodo(task) {
        task.body.remove();
        this.tasks = this.tasks.filter((t) => {
           return t !== task;
        });
    }
  
    displayAll() {
        this.tasks.forEach((task) => {
            this.body.prepend(task.body);
        });
    }
  
    filterTodos(complete, date) {
        let result = this.tasks.slice();
        this.body.innerHTML = '';
  
        if (complete !== 'none') {
            complete = complete === 'complete';
            
            result = result.filter((task) => {
                return task.complete === complete;
            });
        }
  
        if (date) {
            date = new Date(Date.parse(date));
  
            function datesAreSameDay(date1, date2) {
                return date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate();
            }
  
            result = result.filter((task) => {
                return datesAreSameDay(task.deadline, date);
            })
        }
  
        result.forEach((task) => {
            this.body.prepend(task.body);
        });
    }
  }
  