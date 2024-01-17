import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/cards-inteface';
import { CardsGetDataService } from 'src/app/services/cards-data/cards-get-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public tableDataCards!: CardData[];

  constructor(private cardsService: CardsGetDataService) { }


  ngOnInit(): void {
    this.cardsService.getCardsData().subscribe({
      next: (val: CardData[]) => {
        this.tableDataCards = val;
      }
    })
  }
}
