import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/interfaces/cards-inteface';
import { CardsGetDataService } from 'src/app/services/cards-data/cards-get-data.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  public singleCardData: CardData = {
    id: 0,
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  }

  constructor(private getCardsService: CardsGetDataService) { }

  ngOnInit(): void {
    this.getCardsService.getSingleCardsData(1).subscribe({
      next: (val: CardData) => {
        this.singleCardData = val;
      }
    })
  }

}
