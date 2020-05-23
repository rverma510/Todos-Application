import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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

  constructor(private todoService: TodoDataService) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('rverma510').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

}
