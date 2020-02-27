import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError, groupBy, refCount, publishReplay } from 'rxjs/operators';
import { Observable, throwError, of, interval } from 'rxjs';

@Injectable()
export class DataService {
  private gamesById$: Observable<any[]>;
  private gamesCategories$: Observable<any[]>;
  private categories = [];
  private url = 'https://staging-frontapi.cherrytech.com';

  constructor(private http: HttpClient) {
    const oneHour = 1000 * 60;
    interval(oneHour).subscribe(x => {
      this.clearCache();
    });
  }

  clearCache() {
    this.gamesCategories$ = null;
    console.log('cleaning cache');
  }

  getGameCategories(): Observable<any[]> {
    if (!this.gamesCategories$) {
      this.gamesCategories$ = this.http.get<any>(`${this.url}/game-categories?brand=cherrycasino.desktop&locale=en`)
      .pipe(
        groupBy(data => data._embedded.game_categories),
        map(result => result.key),
        tap(result => {
          console.log('retrieving game-categories from server:', result);
        }),
        publishReplay(1), // this tells Rx to cache the latest emitted
        refCount(), // and this tells Rx to keep the Observable alive as long as there are any Subscribers
        catchError(err => this.handleHttpError(err))
      );
    }
    return this.gamesCategories$;
  }

  getGameById(id: string): Observable<any[]> {
    return this.http.get<any>(`${this.url}/games/${id}?brand=cherrycasino.desktop&locale=en`)
      .pipe(
        tap(result => {
          console.log('retrieving games by id from server:', result);
        }),
        catchError(err => this.handleHttpError(err))
      );
  }

  private handleHttpError(err: HttpErrorResponse): Observable<any> {
    return throwError('dataError!!');
  }
}
