import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee'

@Pipe({
  name: 'employeename'
})
export class EmployeenamePipe implements PipeTransform {

  // This method accepts an Employee Object.
  transform(value: any, args?: any): any {
    return 'The salary of ' + value.firstName + ' ' + value.lastName + ' is ' + value.salary;
  }

}
