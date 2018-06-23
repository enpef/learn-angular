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

    <ul *ngIf="stockMarkets.length >= 5">
        <li *ngFor="let stockMarket of stockMarkets">
            {{stockMarket}}
        </li>
    </ul>

    <hr>

    <div [ngSwitch]="market">
        <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
        <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
        <div *ngSwitchDefault>Could not find a match</div>
    </div>
    `
})

export class StocksComponent{
    title = ' List of Stocks: ';
    showStockMarket = true;
    market = 'LSE';
    // stocks = ['apple', 'ibm', 'google', 'amazon'];
    stocks;
    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE']

    constructor(stockService : StockService){
        this.stocks = stockService.getStocks();
    }
}