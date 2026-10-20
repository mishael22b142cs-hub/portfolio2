import { Component } from '@angular/core';
@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section class="education-section">
      <h2>EDUCATION <span class="highlight">TIMELINE</span></h2>
      <div class="timeline">
        <div class="edu-card">
          <h3>B.Tech, Computer Science &amp; Engineering</h3>
          <p>Government Engineering College, Wayanad <span class="highlight">2022–2026</span></p>
          <p>APJ Abdul Kalam Technological University &middot; CGPA: 6.48</p>
        </div>
        <div class="edu-card">
          <h3>Higher Secondary</h3>
          <p>GHSS Chayoth School <span class="highlight">97%</span></p>
        </div>
        <div class="edu-card">
          <h3>Secondary Education</h3>
          <p>GHSS Chayoth School <span class="highlight">99%</span></p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.component.css']
})
export class EducationComponent {}
