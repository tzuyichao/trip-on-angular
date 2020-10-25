import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  email: string;

  constructor(private util: UtilsService) { }

  ngOnInit(): void {
  }

  verifyEmail(): void {
    console.log(`Email: ${this.email}`);
    if(this.util.verifyEmail(this.email)) {
      console.log('email format is valid');
    } else {
      console.log('email format is not valid');
    }
  }

}
