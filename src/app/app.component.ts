import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
// "main": "src/main.ts",
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export default class AppComponent implements OnInit {
  title = 'my-app';
  users: any;
  constructor(private http: HttpClient, private accountService: AccountService) { }
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }
  
  getUsers() {
    this.http.get(`http://localhost:5067/api/User`).subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed'),
    });
  }


  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user')!);
    this.accountService.setCurrentUser(user);
  }
}
