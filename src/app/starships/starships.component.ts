import { Component, OnInit } from '@angular/core';
import { StarshipsService } from './starships.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: any
  formStarships: FormGroup

  constructor(

    private readonly starshipsService : StarshipsService,
    private readonly formBuilder: FormBuilder

  ){}

  ngOnInit(){
    this.getStarships()
    this.initForm()
  }


  getStarships(){
    this.starshipsService.getStarships().subscribe({
      next: (res) => {
        this.starships = res
        console.log(res)
      },
    

    })
  }

  initForm(){
    this.formStarships = this.formBuilder.group({
      name: '',
      crew: ''
    })
  }

  addStarship(){
    let newStarship = this.formStarships.value
    if (newStarship.name != '' && newStarship.crew != '') {
      this.starships.push(newStarship)
    }
  }

  removeStarship(){
    this.starships.pop()
  }

}
