import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'http://localhost:5067/api/';
  constructor(private http: HttpClient) {
   
   }
   login(model: any) {
      return this.http.post(this.baseUrl + 'Account/login', model)
   }
}
