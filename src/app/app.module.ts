import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent } from './stocks.component';
import { HighLightDirective} from './highlight.directive';
import { StockService } from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';
import { EmployeenamePipe } from './employeename.pipe';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyService } from './currency.service';
import { BondsDirective } from './bonds.directive'

@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StocksComponent,
    HighLightDirective,
    DateFormatterPipe,
    CapitalizePipe,
    EmployeenamePipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
