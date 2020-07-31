import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact">
      <h3>Contact</h3>
      <article class="flex-row">
        <p><i class="far fa-envelope"></i>e.lahaye49@gmail.com</p>
        <p><i class="fas fa-mobile-alt"></i>06.31.39.37.26</p>
        <p><i class="fas fa-home"></i>13006 Marseille</p>
      </article>
      <article class="flex-row">
        <button>
          <a href="../cv_lahaye_elise.pdf" download
            ><i class="fas fa-file-download"></i>Téléchargez mon CV</a
          >
        </button>
        <button>
          <a href="https://www.linkedin.com/in/elise-lahaye-a8a1221a5/"
            ><i class="fab fa-linkedin"></i>Elise Lahaye</a
          >
        </button>
      </article>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
