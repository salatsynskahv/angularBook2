import {Injectable} from '@angular/core';
import {Hero} from '../hero.model';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, Subscription, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpService: HttpClient) {
  }

  private heroesUrl = '/api/heroes/';

  public getHeroes(): Observable<Hero[]> {
    return this.httpService.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.error(err);
          return throwError(err);
        })
      );
  }
  createHero(name: string): Observable<Hero> {
    const hero = {name};
    return this.httpService.post<Hero>(this.heroesUrl, hero);
  }

  editHero(id: number, hero: Hero): Observable<any> {
    return this.httpService.put(this.heroesUrl + id, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.httpService.delete(this.heroesUrl + id);
  }
}
