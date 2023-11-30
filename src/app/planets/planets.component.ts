import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { IPlanet } from './planets.model'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: IPlanet[]
  formPlanets: FormGroup

  constructor(

    private readonly planetsService : PlanetsService,
    private readonly formBuilder : FormBuilder

  ){}

  ngOnInit(){
    this.getPlanets()
    this.initForm()
  }

  getPlanets(){
    this.planetsService.getPlanets().subscribe({
      next: (res) => {
        this.planets = res
        console.log(res)
      },
    

    })
  }

  initForm(){
    this.formPlanets = this.formBuilder.group({
      name:'',
      population:''
    })
  }

  addPlanet(){
    let newPlanet = this.formPlanets.value
    if (newPlanet.name != '' && newPlanet.population != '') {
      this.planets.push(newPlanet)
    }

  }

  removePlanet(){
    this.planets.pop()
  }
}