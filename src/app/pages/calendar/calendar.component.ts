import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { showDates, Week, Show } from './showDates';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class CalendarComponent implements OnInit {
  date: string = "";
  showDates = showDates;
  currentMonth = new Date();
  currentMonthString = undefined;
  today = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  calendarData: Week[] = [];
  isCurrentMonth = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const monthstring = params['month'];
      if (monthstring && /^\d{6}$/.test(monthstring)) {
        this.currentMonthString = monthstring;
        this.currentMonth = new Date(monthstring.slice(2), monthstring.slice(0, 2), 1);
      }
      this.date = params['date'];
    });
    this.populateCalendar();
  }

  isShowUpcoming(show: Show) {
    return show.date > new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 1);
  }

  getFormattedMonth() {
    const month = this.currentMonth.toLocaleDateString('en-us', { month: "long" });
    const year = this.currentMonth.getFullYear();
    return `${month} ${year}`;
  }

  incrementMonth(delta: number) {
    const newDate = new Date(this.currentMonth.getTime());
    newDate.setMonth(this.currentMonth.getMonth() + delta);
    this.currentMonth = newDate;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        month: newDate.getMonth().toString().padStart(2, '0') + newDate.getFullYear().toString()
      }
    });
    this.populateCalendar();
  }

  getShowsInCurrentMonth() {
    return Object.entries(showDates).filter(([id, show]) => {
      return (show.date.getMonth() === this.currentMonth.getMonth() && show.date.getFullYear() === this.currentMonth.getFullYear());
    });
  }

  getFormattedDate(date: Date, includeYear = true) {
    const day = date.toLocaleDateString('en-us', { weekday: "long" });
    const month = date.toLocaleDateString('en-us', { month: "long" });
    const dayNum = date.getDate();
    const year = date.getFullYear();
    return includeYear ? `${day} ${month} ${this.getOrdinalNum(dayNum)}, ${year}` : `${day} ${month} ${this.getOrdinalNum(dayNum)}`;
  }

  getOrdinalNum(number: number): string {
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
    const numberOfDaysInMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfWeek = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1).getDay();
    let day = 0;
    for (let weekIndex = 0; weekIndex < Math.ceil((firstDayOfWeek + numberOfDaysInMonth) / 7); weekIndex++) {
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
    this.isCurrentMonth = (this.today.getMonth() === this.currentMonth.getMonth() && this.today.getFullYear() === this.currentMonth.getFullYear());
  }

  isToday(day: number) {
    return this.today.getDate() === day;
  }
}
