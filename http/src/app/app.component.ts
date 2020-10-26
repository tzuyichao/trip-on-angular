import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  
  constructor(private client: HttpClient) {}

  ngOnInit() {
    this.client.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((result) => {
      console.log(result);
      let todo: Todo = (result as Todo);
      this.title = todo.title;
    });
  }
}

