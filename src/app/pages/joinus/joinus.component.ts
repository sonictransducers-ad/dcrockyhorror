import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-joinus',
    templateUrl: './joinus.component.html',
    styleUrls: ['./joinus.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class JoinUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
