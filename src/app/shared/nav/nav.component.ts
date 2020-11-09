import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public innerWidth: any;
  public buttonMobileNav = false;
  public navbar = false;
  public clickOnNavbar = false;

  constructor() { }

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
