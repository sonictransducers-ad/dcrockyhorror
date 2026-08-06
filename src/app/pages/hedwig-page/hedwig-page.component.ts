import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-hedwig-page',
    templateUrl: './hedwig-page.component.html',
    styleUrls: ['./hedwig-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HedwigPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
