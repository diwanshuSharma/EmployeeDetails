import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { EmployeeAgePipe } from 'src/shared/pipes/employeeAge';
import { ImageBorderDirective } from 'src/shared/directives/imageBorder';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { FormsModule } from '@angular/forms';
import { EmployeeSortComponent } from './employee-sort/employee-sort.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent,
    EmployeeCountComponent,
    EmployeeCountComponent,
    EmployeeAgePipe,
    ImageBorderDirective,
    EmployeeSearchComponent,
    EmployeeSearchComponent,
    EmployeeSortComponent,
    EmployeeSortComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
