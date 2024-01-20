import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ENV } from 'src/app/environments/environments';
import { CardData } from 'src/app/interfaces/cards-inteface';

@Injectable({
  providedIn: 'root'
})
export class CardsGetDataService {

  private getCards!: string;

  constructor(private http: HttpClient) {
    this.getCards = ENV.getCardsData;
  }

  public getCardsData(limit?: number): Observable<CardData[]> {
    return this.http.get<CardData[]>(`${this.getCards}?limit=${limit}`);
  }
  public getSingleCardsData(id?: number): Observable<CardData> {
    return this.http.get<CardData>(`${this.getCards}/${id}`);
  }

  public getRandomCardsData(): Observable<CardData[]> {
    return this.http.get<CardData[]>(this.getCards).pipe(
      map(res => res.sort(() => (0.5 - Math.random())).slice(0))
    )
  }


}
