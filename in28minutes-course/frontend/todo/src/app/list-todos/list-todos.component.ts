import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

// Class that represent a Todo item
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`Deleted todo ${id}`);

    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`Updated ${id}`);
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
