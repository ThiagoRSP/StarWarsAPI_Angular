import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs'
import {IResGetPlanets} from './planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private readonly url: string = 'https://swapi.dev/api'

  constructor(

    private readonly httpClient: HttpClient
  ) {}

  getPlanets(){
    return this.httpClient.get<IResGetPlanets>(this.url + '/planets').pipe(
      map(res => res.results)
    )
  }
  
}
