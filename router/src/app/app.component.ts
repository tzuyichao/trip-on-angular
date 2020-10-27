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
    if(this.selected != undefined) {
      console.log(this.selected);
      this.router.navigate(['/' + this.selected])
    }
  }
}
