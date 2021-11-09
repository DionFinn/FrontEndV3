import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../Models/Hero';
import { Game } from '../Models/Game';
import { Villan } from '../Models/Villan';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly baseUrl: string = 'https://DionFinnerty.somee.com/HeroGame';

  constructor(private _http: HttpClient) {}

  public getAllHeroes(): Observable<Hero[]> {
    console.log('getAllHeroes()');
    return this._http.get<Hero[]>(this.baseUrl + '/hero');
    // console.log(aa);
    // return aa;
  }

  public getAllVillans(): Observable<Villan[]> {
    console.log('getAllVillans()');
    return this._http.get<Villan[]>(this.baseUrl + '/villan');
    // console.log(aa);
    // return aa;
  }

  postGame(game: Game): Observable<Game> {
    return this._http.post<Game>(this.baseUrl, game);
  }

  public getAllGames(): Observable<Game[]> {
    console.log('getAllGames()');
    return this._http.get<Game[]>(this.baseUrl + '/game');
    // console.log(aa);
    // return aa;
  }
}
