import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { R3FactoryTarget } from '@angular/compiler';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){ }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message = '';

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveTodos();
  }

  retrieveTodos() {
    this.todoService.retrieveAllTodos('rverma510').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo("rverma510", id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful!`;
        this.retrieveTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);

  }

}
