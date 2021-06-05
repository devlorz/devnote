import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showMenu = false;

  constructor(private router: Router) {}

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  onHome() {
    this.router.navigateByUrl('/');
  }
}
