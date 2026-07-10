import { Component } from '@angular/core';
@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section class="education-section">
      <h2>EDUCATION <span class="highlight">TIMELINE</span></h2>
      <div class="timeline">
        <div class="edu-card">
          <h3>Bachelor of Computer Science</h3>
          <p>Government Engineering College,Wayanad <span class="highlight">2022–2026</span></p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.component.css']
})
export class EducationComponent {}
