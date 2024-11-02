import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `


    <app-navbar/>
    <div class="max-w-screen-md mx-auto bg-white-500">
        <router-outlet />
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-di';
}
