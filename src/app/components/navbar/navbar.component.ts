import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  onHome() {
    this.router.navigateByUrl('/');
  }
}
