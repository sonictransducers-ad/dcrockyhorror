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

  getFormattedDate(date: Date) {
    const day = date.toLocaleDateString('en-us', { weekday:"long"});
    const month = date.toLocaleDateString('en-us', { month:"long"});
    const dayNum = date.getDate();
    const year = date.getFullYear();
    return `${day} ${month} ${this.getOrdinalNum(dayNum)}, ${year}`
  }

  getOrdinalNum(number: number):string {
    let selector;
  
    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }
  
    return number + ['th', 'st', 'nd', 'rd', ''][selector];
  };
}
