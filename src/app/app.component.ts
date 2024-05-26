import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export default class AppComponent implements OnInit {
  title = 'my-app';
  users: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get(`http://localhost:5067/api/User`).subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed'),
    });
  }
}
