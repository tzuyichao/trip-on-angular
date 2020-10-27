import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
  selected: string;

  constructor(private router: Router) {}

  routeToC() {
    this.router.navigate(['/C']);
  }

  routeToD() {
    this.router.navigate(['/D']);
  }

  selectChange() {
    console.log(this.selected);
    if(this.selected != undefined) {
      if(this.selected === 'student') {
        this.router.navigate(['/' + this.selected], { queryParams: {name: '張三'} });
      } else {
        this.router.navigate(['/' + this.selected])
      }
    }
  }
}
