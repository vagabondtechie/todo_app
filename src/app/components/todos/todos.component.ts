import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoContent: string;
  todos: string[] = [];

  saveTodo() {
    this.todos.push(this.todoContent);
    this.todoContent = '';
    console.log('asdasdsa')
  }

  constructor() { }

  ngOnInit() {
  }

}
