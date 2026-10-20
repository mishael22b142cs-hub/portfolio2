import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contact-section">
      <h2>CONTACT <span class="highlight">ME</span></h2>
      <form class="contact-form" (ngSubmit)="onSubmit()" #form="ngForm">
        <input type="text" name="name" placeholder="Name" required ngModel>
        <input type="email" name="email" placeholder="Email" required ngModel>
        <textarea name="message" placeholder="Message" required ngModel></textarea>
        <button class="btn" type="submit" [disabled]="!form.valid">Send Message</button>
      </form>
      <div class="contact-social">
        <a href="https://github.com/mishael22b142cs-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        <a href="https://linkedin.com/in/mishael-joseph-24a735273" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
        <a href="mailto:mishaeljoseph04@gmail.com" aria-label="Email">Email</a>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit() {
    console.log('Contact form submitted!');
  }
}
