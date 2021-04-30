import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate'
  [eventSettings]='eventSettings'></ejs-schedule>`
})
export class AppComponent {
  public data: object [] = [{
id: 2,
eventName: 'Meeting',
startTime: new Date(2018, 1, 15, 10, 0),
endTime: new Date(2018, 1, 15, 12, 30),
isAllDay: false
  }];
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = {
dataSource: this.data,
fields: {
  id: 'id',
  subject: { name: 'eventName' },
  isAllDay: { name: 'isAllDay' },
  startTime: { name: 'startTime' },
  endTime: { name: 'endTime' },
}
  };
}
