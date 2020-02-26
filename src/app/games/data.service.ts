import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, tap, catchError, groupBy } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';

@Injectable()
export class DataService {
  private getHeaders: HttpHeaders = new HttpHeaders({
    Accept: 'application/json'
  });

  private categories = [];
  private url = 'https://staging-frontapi.cherrytech.com';

  constructor(private http: HttpClient) {}

  getGameCategories(): Observable<any[]> {
    return this.http.get<any>(`${this.url}/game-categories?brand=cherrycasino.desktop&locale=en`)
    .pipe(
      groupBy(data => data._embedded.game_categories),
      map(result => result.key),
      tap(result => {

      }),
      catchError(err => this.handleHttpError(err))
    );
  }
  //_embedded  game_categories
  private handleHttpError(err: HttpErrorResponse): Observable<any> {
    return throwError('dataError!!');
  }
}
