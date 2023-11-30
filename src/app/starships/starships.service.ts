import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs'
import { IResGetStarships } from './starships.model'

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private readonly url: string = 'https://swapi.dev/api'

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getStarships(){
    return this.httpClient.get<IResGetStarships>(this.url + '/starships').pipe(
      map(res => res.results)
    )
  }
}
