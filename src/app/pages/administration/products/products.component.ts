import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { CardData } from 'src/app/interfaces/cards-inteface';
import { CardsGetDataService } from 'src/app/services/cards-data/cards-get-data.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<ModalComponent>;
  
  public tableDataCards!: CardData[];

  constructor(
    private cardsService: CardsGetDataService,
    private router:Router
    ) { }


  ngOnInit(): void {
    this.cardsService.getCardsData().subscribe({
      next: (val: CardData[]) => {
        this.tableDataCards = val;
      }
    })
  }

  public editItem(id: number) {
    this.router.navigate([`admin/products/${id}`])
  }

  public openDeleteModal(){
    this.componentRef = this.viewRef.createComponent(ModalComponent);
    this.componentRef.instance.options.next({
      title: 'Удалить',
      delete: true,
      header: 'Удалить этот рецепт?',
      subHeader: 'Вы хотите удалить этот рецепт'
    });
  }
}
