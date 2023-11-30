import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PlanetsComponent
  ]
})
export class PlanetsModule { }
