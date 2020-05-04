import { Component, OnInit } from '@angular/core';
import { APIService } from './API.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myAmplifyProject';
  todos: any[];

  name: string;
  description: string;

  constructor(private apiService: APIService) {}

  async ngOnInit() {
    // Get Todo's
    this.apiService.ListTodos().then((evt) => {
      this.todos = evt.items;
    });
    // Subscribe for realtime data updates
    this.apiService.OnCreateTodoListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateTodo;
      this.todos = [...this.todos, data];
    });
  }

  createTodo() {
    this.apiService.CreateTodo({
        name: this.name,
        description: this.description
    });
  }
  
}
