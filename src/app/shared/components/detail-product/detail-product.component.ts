import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private getCardsService: CardsGetDataService,
    private activatedRoute: ActivatedRoute) {
    activatedRoute.url.subscribe({
      next: () => {
        this.singleGetData()
      }
    })
  }

  ngOnInit(): void {

  }

  public singleGetData() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getCardsService.getSingleCardsData(id).subscribe({
      next: (val: CardData) => {
        this.singleCardData = val;
      }
    })
  }

}
