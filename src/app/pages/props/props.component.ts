import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-props',
    templateUrl: './props.component.html',
    styleUrls: ['./props.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PropsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
