import { Component } from '@angular/core';
import { StocksComponent } from './stocks.component';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  firstName = 'jon';
  today = new Date();
  employee : Employee = new Employee('Natdanai', 'Prasartkitjakorn', 50000);
  profile = { id: 10001, name: 'Natdanai Prasartkitjakorn', roles: 'Admin'}
}
