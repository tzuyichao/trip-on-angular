import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTodoComponent implements OnInit {
  selectedDate: Date; 

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if(view === 'month') {
      const date = cellDate.getDate();
      return (date === 1 || date ===20)?'example-custom-date-class':'';
    }
    return '';
  };

  constructor() { }

  ngOnInit(): void {
  }

}
