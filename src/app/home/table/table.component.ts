import { Component, OnInit } from '@angular/core';
import { Coin, CoinService } from '../coins';

@Component({
  selector: 'home-table',
  templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {
  coins: Coin[];

  constructor(private CoinService: CoinService) {}

  ngOnInit() {
    this.getCoins();
  }

  getCoins(): void {
    this.CoinService.getCoins()
    .subscribe(coins => this.coins = coins);
  }
}
