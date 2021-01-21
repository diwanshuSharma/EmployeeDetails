import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css'],
})
export class EmployeeCountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  totalCount: number = 0;
  @Input()
  maleCount: number = 0;
  @Input()
  femaleCount: number = 0;
}
