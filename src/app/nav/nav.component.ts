import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  model: any = {};
  constructor(public accountService: AccountService, private router: Router){}
  ngOnInit(): void {
   
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        this.router.navigateByUrl("/members")
      },
      error: error => console.log('error ', error)
    })
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
