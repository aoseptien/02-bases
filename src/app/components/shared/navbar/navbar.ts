import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: `
    :host ::ng-deep a.active {
      background: rgba(255, 255, 255, 0.95) !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      transform: translateY(-1px);
    }

    :host ::ng-deep a:hover {
      background: rgba(255, 255, 255, 0.8);
      transform: translateY(-1px);
    }
  `,
})
export class Navbar {}
