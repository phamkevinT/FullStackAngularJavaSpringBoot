import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Get the URL param ID
    this.todo = new Todo(this.id, '', false, new Date()); // Dummy default todo to populate field if nothing is available

    if (this.id != -1) { // ID != -1 -> not trying to add new todo, so instead retrieve the existing todo
      this.todoService.retrieveTodo('in28minutes', this.id).subscribe(
        data => this.todo = data
      )
    }

  }

  saveTodo() {

    if (this.id === -1) { // New todo -> call createTodo
      this.todoService.createTodo('in28minutes', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos'])
        }
      )
    } else { // ID != -1 -> call updateTodo
      this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos'])
        }
      )
    }


  }

}
