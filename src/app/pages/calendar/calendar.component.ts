import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { showDates, Week, Show } from './showDates';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date: string = "";
  showDates = showDates;
  currentMonth = new Date();
  months = ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];
  calendarData: Week[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
    });
    this.populateCalendar();
  }

  isShowUpcoming(show: Show) {
    const today = new Date();
    return show.date > new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
  }

  getFormattedMonth() {
    const month = this.currentMonth.toLocaleDateString('en-us', { month:"long"});
    const year = this.currentMonth.getFullYear();
    return `${month} ${year}`;
  }

  incrementMonth(delta: number) {
    const newMonth = (this.currentMonth.getMonth() + delta);
    const newYear = this.currentMonth.getFullYear();
    this.currentMonth = new Date(newYear, newMonth, 1)
    this.populateCalendar();
  }

  getShowsInCurrentMonth() {
    return Object.entries(showDates).filter(([id, show]) => {
      return (show.date.getMonth() === this.currentMonth.getMonth() && show.date.getFullYear() === this.currentMonth.getFullYear());
    });
  }

  getFormattedDate(date: Date, includeYear = true) {
    const day = date.toLocaleDateString('en-us', { weekday:"long"});
    const month = date.toLocaleDateString('en-us', { month:"long"});
    const dayNum = date.getDate();
    const year = date.getFullYear();
    return includeYear ? `${day} ${month} ${this.getOrdinalNum(dayNum)}, ${year}` : `${day} ${month} ${this.getOrdinalNum(dayNum)}`;
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

  populateCalendar() {
    this.calendarData = [];
    const showsThisMonth = this.getShowsInCurrentMonth();
    const numberOfDaysInMonth = new Date(this.currentMonth.getFullYear(),this.currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfWeek = new Date(this.currentMonth.getFullYear(),this.currentMonth.getMonth(), 1).getDay();
    let day = 0;
    for (let weekIndex = 0; weekIndex < Math.ceil((firstDayOfWeek + numberOfDaysInMonth)/7); weekIndex++) {
      let week = [];
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const calculatedDay = (day < firstDayOfWeek || day >= firstDayOfWeek + numberOfDaysInMonth) ? 0 : day - firstDayOfWeek + 1;
        const shows = showsThisMonth.filter(([id, show]) => {
          return (show.date.getDate() === calculatedDay);
        })
        week.push([calculatedDay, shows])
        day++;
      }
      this.calendarData.push(week as Week);
    }
  }
}
