import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  model: any = {}
  constructor(private accountService: AccountService){

  }
  ngOnInit(): void {
    
  }
  register(){
   this.accountService.register(this.model).subscribe({
    next: () => {
      this.cancel();
    },
    error: error => console.log(error)
   })
  }
  cancel(){
    console.log('cancelled')
  }
}
