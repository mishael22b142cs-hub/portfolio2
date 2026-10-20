import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-text">
        <h1>Welcome to my <span class="highlight">portfolio!</span></h1>
        <p>
          I'm <span class="highlight">Mishael Joseph</span>, a <span class="highlight">Data Scientist &amp; ML Engineer</span>
          building recommender systems and LLM-powered agents, with full-stack development experience
        </p>
        <a href="/resume.pdf" class="btn" target="_blank" rel="noopener noreferrer">My Resume</a>
      </div>
      <div class="hero-photo">
        <img src="/mii.png" alt="Mishael Joseph portrait" />
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
