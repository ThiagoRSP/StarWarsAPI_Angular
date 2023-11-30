import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IResGetPeople } from './people.model';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly url: string = 'https://swapi.dev/api'

  constructor(

    private readonly httpClient: HttpClient
  ) {}

  getPeople(){
    return this.httpClient.get<IResGetPeople>(this.url + '/people').pipe(
      map(res => res.results)
    )
  }
  

}
