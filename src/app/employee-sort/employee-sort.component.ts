import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-sort',
  templateUrl: './employee-sort.component.html',
  styleUrls: ['./employee-sort.component.css'],
})
export class EmployeeSortComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sortOption: string = '';

  @Output()
  notifyOptionSearch: EventEmitter<string> = new EventEmitter<string>();

  sortEmployees() {
    this.notifyOptionSearch.emit(this.sortOption);
  }
}
