import { Component } from '@angular/core';

@Component({
  selector: 'event-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fundamentals';
}
