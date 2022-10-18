import { Component } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  onHome = true;

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart) {
        this.onHome = event.url === "/"
      }
    })
  }
}
