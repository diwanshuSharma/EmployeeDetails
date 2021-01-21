import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/shared/models/Employee';

@Injectable()
export class EmployeeService {
  /**
   *
   */
  constructor(private _http: HttpClient) {}

  url: string = 'http://219.65.96.170:9101/api/employee';

  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.url);
  }
}
