import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  showMobileMenu = false;

  navigate() {
    this.toggleMobileMenu(false);
  }

  toggleMobileMenu(state = !this.showMobileMenu) {
    if (state) {
      document.getElementById("path1")?.setAttribute("d", "M10,10 L30,30");
      document.getElementById("path2")?.setAttribute("d", "M10,10 L30,30");
      document.getElementById("path3")?.setAttribute("d", "M10,30 L30,10");
    } else {
      document.getElementById("path1")?.setAttribute("d", "M10,10 L30,10");
      document.getElementById("path2")?.setAttribute("d", "M10,20 L30,20");
      document.getElementById("path3")?.setAttribute("d", "M10,30 L30,30");
    }
    this.showMobileMenu = state;
  }
}
