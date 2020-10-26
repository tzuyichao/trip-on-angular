import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Todo } from './todo';
import { HttpService } from './http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  
  constructor(private client: HttpClient, private http: HttpService) {}

  ngOnInit() {
    this.client.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((result) => {
      console.log(result);
      let todo: Todo = (result as Todo);
      this.title = todo.title;
    });
    this.http.get("todos/2").subscribe(res => {
      console.log(res);
    });
  }
}

