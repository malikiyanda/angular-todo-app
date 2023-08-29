import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'] // You can define your own styles here
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        title: this.newTask,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }

  deleteTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}

interface Task {
  title: string;
  completed: boolean;
}
