import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './todo.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  todos: any[] = [];
  loading = false;
  error = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.loading = true;
    this.todoService.getTodos().subscribe({
      next: (data: any) => {
        this.todos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error fetching todos';
        this.loading = false;
      }
    });
  }
}
