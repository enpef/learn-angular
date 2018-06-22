import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h2>Stocks Component</h2>
    {{title}}
    <ul>
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>
    `
})

export class StocksComponent{
    title = ' List of Stocks: ';
    // stocks = ['apple', 'ibm', 'google', 'amazon'];
    stocks;

    constructor(stockService : StockService){
        this.stocks = stockService.getStocks();
    }
}