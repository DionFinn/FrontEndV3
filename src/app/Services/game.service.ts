import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Hero } from '../Models/Hero';
import { Result } from '../Models/Result';
import { Villan } from '../Models/Villan';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly baseUrl: string = 'https://my-json-server.typicode.com/DionFinn/FakeAPI/';
  //'https://dionfinnerty.somee.com/ProjectHero'
  //'https://my-json-server.typicode.com/DionFinn/FakeAPI/'
  //switching between json fake api change villan endpoint to "villain", i cant spell for shit
  readonly headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  readonly headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private _http: HttpClient) {}

  public getAllHeroes(): Observable<Hero[]> {
    console.log('getAllHeroes()');
    return this._http.get<Hero[]>(this.baseUrl + '/hero');
  }

  public getAllVillans(): Observable<Villan[]> {
    console.log('getAllVillans()');
    return this._http.get<Villan[]>(this.baseUrl + '/villain');
    // console.log(aa);
    // return aa;
  }

  // postGame1(game: Game): Observable<Game> {
  //   return this._http.post<Game>(this.baseUrl, game);
  // }

  postGame(result: Result): void {
    this._http.post<Result>(this.baseUrl, result);
  }

  public getAllGames(): Observable<Result[]> {
    console.log('getAllGames()');
    return this._http.get<Result[]>(this.baseUrl + '/game');
    // console.log(aa);
    // return aa;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
