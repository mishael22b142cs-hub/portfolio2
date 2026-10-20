import { Component } from '@angular/core';
@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects-section">
      <h2>MY <span class="highlight">PROJECTS</span></h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>CineSense Agent</h3>
          <p>LLM movie assistant: a LangGraph agent that calls CineSense's ML models as tools to answer recommendation and rating questions, with conversational memory.</p>
          <div class="tech-chips">
            <span>LangGraph</span><span>Groq</span><span>Streamlit</span>
          </div>
          <div class="project-links">
            <a href="https://cinesense-agent-mishael.streamlit.app/" class="btn" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/mishael22b142cs-hub/cinesense-agent" class="btn outline" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div class="project-card">
          <h3>CineSense</h3>
          <p>Content-based movie recommender using cosine similarity, plus a Random Forest model predicting movie ratings (R² = 0.43), served through a Flask backend.</p>
          <div class="tech-chips">
            <span>Python</span><span>scikit-learn</span><span>Flask</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/mishael22b142cs-hub/cinesense" class="btn outline" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div class="project-card">
          <img class="project-image" src="/gate.jpg" alt="GATE Assistant screenshot" loading="lazy" />
          <h3>GATE Assistant</h3>
          <p>Full-stack exam preparation platform with a responsive React UI, performance charts, REST APIs, and basic authentication.</p>
          <div class="tech-chips">
            <span>React</span><span>REST APIs</span><span>MongoDB</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/mishael22b142cs-hub/gate-assi" class="btn outline" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div class="project-card">
          <img class="project-image" src="/port.png" alt="Portfolio Website screenshot" loading="lazy" />
          <h3>Portfolio Website</h3>
          <p>Modern, responsive portfolio built with Angular and SCSS, deployed on Vercel.</p>
          <div class="tech-chips">
            <span>Angular</span><span>SCSS</span><span>Responsive</span>
          </div>
          <div class="project-links">
            <a href="https://portfolio2-amber-nu.vercel.app/" class="btn" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/mishael22b142cs-hub/portfolio2" class="btn outline" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div class="project-card">
          <img class="project-image" src="/ward.jpg" alt="Ward Connect screenshot" loading="lazy" />
          <h3>Ward Connect</h3>
          <p>Community platform for ward-level updates and service access, with an Angular frontend and PostgreSQL-backed REST APIs.</p>
          <div class="tech-chips">
            <span>Angular</span><span>Express.js</span><span>PostgreSQL</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/mishael22b142cs-hub/wardc" class="btn outline" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div class="project-card">
          <img class="project-image" src="/login.png" alt="Login Page screenshot" loading="lazy" />
          <h3>Login Page</h3>
          <p>Authentication module built with Angular reactive forms and a JWT-based login flow against an Express.js backend.</p>
          <div class="tech-chips">
            <span>Angular</span><span>Express.js</span><span>JWT</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/mishael22b142cs-hub/login_page" class="btn outline" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
        <div class="project-card">
          <img class="project-image" src="/waste.png" alt="Waste Collection Payment screenshot" loading="lazy" />
          <h3>Waste Collection Payment</h3>
          <p>Waste collection payment system for handling monthly fee collection and tracking.</p>
          <div class="tech-chips">
            <span>Angular</span><span>Responsive</span>
          </div>
          <div class="project-links">
            <a href="https://github.com/mishael22b142cs-hub/wastepickupsignin" class="btn outline" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {}
