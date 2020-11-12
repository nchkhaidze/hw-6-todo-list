export default class Task {
  constructor(text, deadline, parent) {
      this.text = text;
      this.deadline = deadline;
      this.complete = false;

      this.body = document.createElement('li');
      this.taskSpan = document.createElement('span');
      this.deadlineParagraph = document.createElement('p');
      this.removeTaskBtn = document.createElement('button'); 
      this.completeTaskBtn = document.createElement('button');

      this.taskSpan.textContent = this.text;
      this.deadlineParagraph.textContent = 'Deadline: ' + this.deadline.toString().slice(4, 21);

      this.removeTaskBtn.classList.add('delete-button');
      this.removeTaskBtn.textContent = 'Delete';
      // binding parent element TodoList's method removeTodo 
      this.removeTaskBtn.addEventListener('click', parent.removeTodo.bind(parent, this));

      this.completeTaskBtn.classList.add('complete-button');
      this.completeTaskBtn.textContent = 'Mark as complete';
      this.completeTaskBtn.addEventListener('click', this.markComplete.bind(this));

      this.body.append(this.taskSpan);
      this.body.append(this.removeTaskBtn);
      this.body.append(this.completeTaskBtn);
      this.body.append(this.deadlineParagraph);
  }

  markComplete() {
      this.complete = this.complete === false;
      this.body.classList.toggle('complete');
      this.completeTaskBtn.textContent = this.completeTaskBtn.textContent === 'Mark as complete' ? 'Unmark as complete' : 'Mark as complete';
  }
}
