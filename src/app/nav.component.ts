import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <header (window:resize)="onResize($event)">
      <i
        class="fas fa-bars"
        *ngIf="buttonMobileNav"
        (click)="changeNavbar()"
      ></i>
      <nav class="nav-site" [ngClass]="navbar ? 'visible' : 'invisible'">
        <a routerLink="" *ngIf="!buttonMobileNav"
          ><img src="../assets/lotus.png" alt="Arbre de vie"
        /></a>
        <a routerLink="" *ngIf="buttonMobileNav">Accueil</a>
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
  public innerWidth: any;
  public buttonMobileNav = false;
  public navbar = true;
  public clickOnNavbar = false;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 720) {
      this.buttonMobileNav = true;
      this.navbar = false;
    } else {
      this.buttonMobileNav = false;
      this.navbar = true;
    }
  }

  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.clickOnNavbar = false;
    if (this.innerWidth <= 720) {
      this.buttonMobileNav = true;
      this.navbar = false;
    } else {
      this.buttonMobileNav = false;
      this.navbar = true;
    }
  }

  changeNavbar() {
    this.navbar = false;
    if (this.clickOnNavbar == true) {
      this.clickOnNavbar = false;
      this.navbar = false;
    } else {
      this.clickOnNavbar = true;
      this.navbar = true;
    }
  }
}