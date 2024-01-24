import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardData } from 'src/app/interfaces/cards-inteface';
import { CardsGetDataService } from 'src/app/services/cards-data/cards-get-data.service';

@Component({
  selector: 'app-nav-products',
  templateUrl: './nav-products.component.html',
  styleUrls: ['./nav-products.component.css']
})
export class NavProductsComponent implements OnInit {

  public products!: CardData[];

  constructor(
    private getDataService: CardsGetDataService,
    private router: Router) { }


  ngOnInit(): void {
    this.getDataService.getCardsData(3).subscribe({
      next: (val: CardData[]) => {
        this.products = val;
      }
    })
  }

  public navigateToId(id: number) {
    this.router.navigate([`recipe/${id}`])
  }
}
