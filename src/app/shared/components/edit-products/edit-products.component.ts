import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardData } from 'src/app/interfaces/cards-inteface';
import { CardsGetDataService } from 'src/app/services/cards-data/cards-get-data.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {



  public cardData: CardData = {
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
  };

  constructor(private activatedRoute: ActivatedRoute,
    private getDataService: CardsGetDataService) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getDataService.getSingleCardsData(id).subscribe({
      next: (val: CardData) => {
        this.cardData = val;
      }
    })

  }


}
