import { Component, OnInit } from '@angular/core';
import { StarshipsService } from './starships.service'

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: any

  constructor(

    private readonly starshipsService : StarshipsService

  ){}

  ngOnInit(){
    this.getStarships()
  }


  getStarships(){
    this.starshipsService.getStarships().subscribe({
      next: (res) => {
        this.starships = res
        console.log(res)
      },
    

    })
  }

}
