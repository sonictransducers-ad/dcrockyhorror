import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
