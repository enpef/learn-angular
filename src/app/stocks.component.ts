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

    <hr>

    <ul *ngIf="stockMarkets.length > 5">
        <li *ngFor="let stockMarket of stockMarkets">
            {{stockMarket}}
        </li>
    </ul>
    `
})

export class StocksComponent{
    title = ' List of Stocks: ';
    showStockMarket=true;
    // stocks = ['apple', 'ibm', 'google', 'amazon'];
    stocks;
    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE']

    constructor(stockService : StockService){
        this.stocks = stockService.getStocks();
    }
}