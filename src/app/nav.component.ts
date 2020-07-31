import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <header>
      <a routerLink=""><img src="../assets/lotus.png" alt="Arbre de vie" /></a>
      <nav>
        <a routerLink="course">Mon parcours</a>
        <a routerLink="skills">Mes compétences</a>
        <a routerLink="projects">Mes projets</a>
        <a routerLink="contact">Contact</a>
      </nav>
    </header>
  `,
  styles: [],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
