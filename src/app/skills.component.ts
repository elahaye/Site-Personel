import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills">
      <h3>Compétences</h3>
      <article class="flex-row">
        <h4>Compétences Informatiques</h4>
        <div class="flex-row">
          <div>
            <p class="underline"><strong>FRONTEND</strong></p>
            <ul>
              <li><strong>Angular 9</strong></li>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>JS ES6</li>
              <li>Wordpress</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <p class="underline"><strong>BACKEND</strong></p>
            <ul>
              <li><strong>Symfony 4</strong></li>
              <li>PHP 7</li>
              <li>SQL / MySQL</li>
              <li>Framework MVC</li>
              <li>POO / Procédural</li>
            </ul>
          </div>
        </div>
      </article>
      <article class="flex-row center">
        <h4>Compétences Linguistiques</h4>
        <ul>
          <li><strong>Anglais</strong> - niveau courant</li>
          <li><strong>Japonais</strong> - niveau intermédiaire</li>
          <li><strong>Espagnol</strong> - niveau scolaire</li>
        </ul>
        <div></div>
      </article>
      <article class="flex-row center">
        <h4>Compétences Sociales</h4>
        <div class="personnality flex-row">
          <p><i class="fas fa-bolt"></i>Dynamique</p>
          <p><i class="fas fa-grin-alt"></i>Enjouée</p>
          <p><i class="fas fa-fist-raised"></i>Volontaire</p>
        </div>
      </article>
    </section>
  `,
  styles: [],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}