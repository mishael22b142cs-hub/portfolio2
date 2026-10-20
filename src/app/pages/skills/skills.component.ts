import { Component } from '@angular/core';
@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="skills-section">
      <h2>MY <span class="highlight">SKILLS</span></h2>
      <div class="skills-grid">
        <div class="skill-card">
          <h3>Machine Learning</h3>
          <ul>
            <li>Supervised Learning <span class="bar bar-4"></span></li>
            <li>Random Forest <span class="bar bar-4"></span></li>
            <li>Recommender Systems <span class="bar bar-5"></span></li>
            <li>Cosine Similarity <span class="bar bar-4"></span></li>
            <li>Feature Engineering <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Data Science &amp; GenAI</h3>
          <ul>
            <li>scikit-learn <span class="bar bar-4"></span></li>
            <li>pandas / NumPy <span class="bar bar-4"></span></li>
            <li>LangGraph <span class="bar bar-4"></span></li>
            <li>LLM Agents / Tool Calling <span class="bar bar-4"></span></li>
            <li>Groq API <span class="bar bar-3"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python <span class="bar bar-5"></span></li>
            <li>JavaScript <span class="bar bar-5"></span></li>
            <li>SQL <span class="bar bar-4"></span></li>
            <li>C <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>Angular <span class="bar bar-5"></span></li>
            <li>React <span class="bar bar-4"></span></li>
            <li>HTML5 / CSS3 / SCSS <span class="bar bar-5"></span></li>
            <li>Responsive Design <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Backend &amp; Deployment</h3>
          <ul>
            <li>Flask <span class="bar bar-4"></span></li>
            <li>Node.js / Express.js <span class="bar bar-5"></span></li>
            <li>REST APIs <span class="bar bar-4"></span></li>
            <li>Streamlit <span class="bar bar-4"></span></li>
            <li>JWT Authentication <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Databases</h3>
          <ul>
            <li>PostgreSQL <span class="bar bar-5"></span></li>
            <li>MySQL <span class="bar bar-5"></span></li>
            <li>MongoDB <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git / GitHub <span class="bar bar-5"></span></li>
            <li>Git LFS <span class="bar bar-3"></span></li>
            <li>Vercel <span class="bar bar-4"></span></li>
            <li>Figma <span class="bar bar-3"></span></li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {}
