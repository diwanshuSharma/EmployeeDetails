import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/core/services/employee.service';
import { Employee } from 'src/shared/models/Employee';
import { EmployeeSearchComponent } from '../employee-search/employee-search.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  template: 'Hello',
  styleUrls: ['./emoloyee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (emp) => (this.employees = emp),
      () => {},
      () => {
        this.showEmployees = this.employees;
      }
    );
  }

  imgPathM: string = '../../assets/images/male.png';
  imgPathF: string = '../../assets/images/female.png';

  showEmployees: Employee[] = this.employees;

  getEmployees(search: string) {
    if (search != null && search.trim() != '') {
      console.log(search);
      this.showEmployees = this.employees.filter((x) =>
        x.Name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.showEmployees = this.employees;
    }
  }

  sortEmployees(data: string) {
    if (data === 'Name')
      this.showEmployees.sort((x, y) => (x.Name > y.Name ? 1 : -1));
    else
      this.showEmployees.sort((x, y) =>
        parseInt(x.DOB.toString().substr(0, 4)) >
        parseInt(y.DOB.toString().substr(0, 4))
          ? -1
          : 1
      );
  }

  getTotalCount() {
    return this.showEmployees.length;
  }

  getMaleCount() {
    return this.showEmployees.filter((x) => x.Gender === 'M').length;
  }

  getFemaleCount() {
    return this.showEmployees.filter((x) => x.Gender === 'F').length;
  }

  getEmpImage(index: number) {
    return this.showEmployees[index].Gender === 'M'
      ? this.imgPathM
      : this.imgPathF;
  }

  getFullName(index: number) {
    if (this.showEmployees[index].Gender === 'M')
      return 'Mr. ' + this.showEmployees[index].Name;
    else return 'Miss. ' + this.showEmployees[index].Name;
  }

  getEmpDescription(index: number) {
    return (
      this.showEmployees[index].Name +
      '  is A Software Developer and one of the finest employee in our office'
    );
  }

  mouseEnter($event: any) {
    $event.srcElement.classList.add('box-shadow');
  }

  mouseLeave($event: any) {
    $event.srcElement.classList.remove('box-shadow');
  }
}
