import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardData } from 'src/app/interfaces/cards-inteface';
import { CardsGetDataService } from 'src/app/services/cards-data/cards-get-data.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() count!: number;

  @Input() forBestProducts!: boolean;


  public cardsData: CardData[] = [];
  public activeLike = false;
  public btnMoreVisible = true;

  constructor(
    private getDataCardsService: CardsGetDataService,
    private activateRoute: ActivatedRoute,
    private router:Router) {
  }

  ngOnInit(): void {
    this.getData()
  }

  public getData() {

    this.getDataCardsService.getCardsData(this.count).subscribe({
      next: (data: CardData[]) => {
        this.cardsData = data;
      }
    })
  }
  public getRandomData() {
    this.getDataCardsService.getRandomCardsData().subscribe({
      next: (data: CardData[]) => {
        data.slice(0, 3).map((item: CardData) => {
          console.log(item)
          this.cardsData.push(item)
        })
        this.btnMoreVisible = false;
      }
    })
  }

  public toggleButtonLike(id: number) {
    this.cardsData.forEach((item) => {
      if (item.id === id)
        this.activeLike = true;
    })
  }

  public navigateToDetail(id: number) {
    this.router.navigate(['/recipe/',id]);
  }

}
