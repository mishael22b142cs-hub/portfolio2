import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-section">
      <h2>ABOUT <span class="highlight">ME</span></h2>
      <div class="about-card">
        <p>Hello! I'm Mishael Joseph, a Computer Science graduate (B.Tech, 2026) with hands-on experience in machine learning, recommender systems, and LLM-based agents, plus a full-stack development internship. I've built and deployed an end-to-end ML project — a content-based recommender and Random Forest rating predictor — and extended it into a LangGraph tool-calling agent with real vector-search retrieval (sentence-transformers + FAISS) and a PyTorch rating model. I'm now seeking an entry-level Data Scientist / Machine Learning role.</p>
        <ul class="about-highlights">
          <li><span class="highlight">Full Stack Developer Intern</span> at WYND Technology</li>
          <li><span class="highlight">Nileshwar, Kasaragod</span></li>
          <li><span class="highlight">Open to</span> Data Science / ML roles</li>
        </ul>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}
