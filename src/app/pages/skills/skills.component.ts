import { Component } from '@angular/core';
@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="skills-section">
      <h2>MY <span class="highlight">SKILLS</span></h2>
      <div class="skills-grid">
        <div class="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5 <span class="bar bar-5"></span></li>
            <li>CSS3 <span class="bar bar-5"></span></li>
            <li>SCSS <span class="bar bar-4"></span></li>
            <li>JavaScript <span class="bar bar-5"></span></li>
            <li>Angular <span class="bar bar-5"></span></li>
            <li>Responsive Design <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js <span class="bar bar-5"></span></li>
            <li>Express.js <span class="bar bar-5"></span></li>
            <li>REST APIs <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git <span class="bar bar-5"></span></li>
            <li>GitHub <span class="bar bar-5"></span></li>
            <li>Heroku <span class="bar bar-3"></span></li>
            <li>JWT Basics <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Databases</h3>
          <ul>
            <li>MySQL <span class="bar bar-5"></span></li>
            <li>MongoDB <span class="bar bar-4"></span></li>
            <li>PostgreSQL <span class="bar bar-5"></span></li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {}
