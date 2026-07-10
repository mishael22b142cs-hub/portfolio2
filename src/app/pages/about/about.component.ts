import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-section">
      <h2>ABOUT <span class="highlight">ME</span></h2>
      <div class="about-card">
        <p>Hello! I'm Mishael Joseph, a Full Stack Developer currently pursuing my B.Tech in Computer Science &amp; Engineering. I enjoy building clean, responsive, and scalable web applications — from crafting intuitive UIs with Angular to designing robust backend systems with Node.js, Express.js, and PostgreSQL.</p>
        <ul class="about-highlights">
          <li><span class="highlight">3 Month internship</span> experience</li>
          <li><span class="highlight">Ernakulam,Kerala</span></li>
          <li><span class="highlight">Available</span> for freelance & remote</li>
        </ul>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}
