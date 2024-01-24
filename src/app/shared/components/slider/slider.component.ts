import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CardData } from 'src/app/interfaces/cards-inteface';
import { CardsGetDataService } from 'src/app/services/cards-data/cards-get-data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @ViewChild('slider') slider!: ElementRef;

  public dataCards: CardData[] = [];
  public activeItem = 0;


  constructor(private getDataCardsService: CardsGetDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getData();

  };

  public getData() {
    this.getDataCardsService.getCardsData().subscribe({
      next: (data: CardData[]) => {
        this.dataCards = data;
      }
    })
  };

 public next() {
    const parentsSlider = this.slider.nativeElement.parentElement;
    const childSlider = parentsSlider.getElementsByClassName('slider')
    parentsSlider.append(childSlider[0]);

  }
  public prev() {
    const parentsSlider = this.slider.nativeElement.parentElement;
    const childSlider = parentsSlider.getElementsByClassName('slider')
    parentsSlider.prepend(childSlider[childSlider.length - 1]);

  } 

  public navigateToId(id: number) {
    console.log('click')
    this.router.navigate([`recipe/${id}`])
  }



}



