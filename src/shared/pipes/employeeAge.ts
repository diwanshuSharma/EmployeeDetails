import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeAge',
})
export class EmployeeAgePipe implements PipeTransform {
  transform(value: string) {
    let date = new Date();
    let currYear = date.getFullYear();
    console.log(1);
    return currYear - parseInt(value.substr(0, 4));
  }
}
