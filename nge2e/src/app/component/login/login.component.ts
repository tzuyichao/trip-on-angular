import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  message: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`login username: ${this.username}, password: ${this.password}`);
    if(this.username !== '' && this.username !== undefined && this.username === this.password) {
      this.router.navigate(['/home'])
    } else {
      this.message = 'login failed!';
    }
  }

}
