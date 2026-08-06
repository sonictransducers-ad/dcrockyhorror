import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-missing',
    templateUrl: './missing.component.html',
    styleUrls: ['./missing.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MissingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
