import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css'],
})
export class EmployeeSearchComponent {
  constructor() {}

  search: string = '';

  @Output()
  notifySearch: EventEmitter<string> = new EventEmitter<string>();

  callParent() {
    this.notifySearch.emit(this.search);
  }
}
