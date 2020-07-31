import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <section id="intro">
      <article>
        <h1>Lahaye Elise</h1>
        <h2>Web Developper</h2>
        <img src="assets/photo_cv2.jpg" />
      </article>
    </section>
  `,
  styles: [],
})
export class IntroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
