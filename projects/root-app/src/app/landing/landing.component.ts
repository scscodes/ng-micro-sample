import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-landing',
  imports: [RouterModule],
  template: `
    <h1>Landing Page</h1>
    <nav>
      <ul>
        <li><a routerLink="/project-a">Go to Project A</a></li>
        <li><a routerLink="/project-b">Go to Project B</a></li>
      </ul>
    </nav>
  `,
})
export class LandingComponent {}
