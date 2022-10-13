import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  questionStatus = [false, false, false, false, false];
  constructor() { }

  ngOnInit(): void {
  }

  toggleQuestion(id: number) {
    this.questionStatus[id] = !this.questionStatus[id];
  }

}
