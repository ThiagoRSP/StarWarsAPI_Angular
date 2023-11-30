import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { IPerson } from './people.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: IPerson[]
  formPeople: FormGroup


  constructor(

    private readonly peopleService : PeopleService,
    private readonly formBuilder : FormBuilder


  ){}

  ngOnInit(){
    this.getPeople()
    this.initForm()
  }

  getPeople(){
    this.peopleService.getPeople().subscribe({
      next: (res) => {
        this.people = res
      },
    

    })
  }

  initForm (){
    this.formPeople = this.formBuilder.group({ name: ''
  })}


  
  addPerson () {
    let newName = this.formPeople.value
    if (newName.name != ''){
      this.people.push(newName)
    }
    
  }

  removePerson (){
    this.people.pop()
 
  }
}
