import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'Learn to dance'},
    {id: 2, description: 'become expert at angular'},
    {id: 3, description: 'visit germany'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
