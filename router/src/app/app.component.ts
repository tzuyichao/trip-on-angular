import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';

  constructor(private router: Router) {}

  routeToC() {
    this.router.navigate(['/C']);
  }

  routeToD() {
    this.router.navigate(['/D']);
  }
}
