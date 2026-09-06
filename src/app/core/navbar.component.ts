import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="brand">&lt;mishaeljoseph /&gt;</div>
      <button
        class="nav-toggle"
        type="button"
        [attr.aria-expanded]="menuOpen()"
        aria-label="Toggle navigation menu"
        (click)="toggleMenu()"
      >
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>
      <ul class="nav-links" [class.open]="menuOpen()">
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Home</a></li>
        <li><a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a></li>
        <li><a routerLink="/skills" routerLinkActive="active" (click)="closeMenu()">Skills</a></li>
        <li><a routerLink="/education" routerLinkActive="active" (click)="closeMenu()">Education</a></li>
        <li><a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Projects</a></li>
        <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      width: 100%;
      background: #000;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem 1rem 1rem;
      z-index: 100;
      border-bottom: 2px solid #00ff9c;
      flex-wrap: wrap;
    }
    .brand {
      font-weight: bold;
      font-size: 1.5rem;
      color: #00ff9c;
    }
    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    .nav-links a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s, color 0.2s;
    }
    .nav-links a.active, .nav-links a:hover {
      color: #00ff9c;
      border-bottom: 2px solid #00ff9c;
    }
    .nav-toggle {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      padding: 8px;
      background: transparent;
      border: 2px solid #00ff9c;
      border-radius: 6px;
      cursor: pointer;
    }
    .nav-toggle-bar {
      display: block;
      width: 100%;
      height: 2px;
      background: #00ff9c;
    }

    @media (max-width: 768px) {
      .navbar {
        padding: 1rem;
      }
      .nav-toggle {
        display: flex;
      }
      .nav-links {
        flex-basis: 100%;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        display: none;
      }
      .nav-links.open {
        display: flex;
      }
      .nav-links a {
        display: inline-block;
        padding: 0.25rem 0;
      }
    }
  `]
})
export class NavbarComponent {
  readonly menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
