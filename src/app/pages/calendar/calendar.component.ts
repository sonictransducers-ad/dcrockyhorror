import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { showDates } from './showDates';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date: string = "";
  showDates = showDates;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
    });
  }

}
