import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PeopleComponent
  ]
})
export class PeopleModule { }
