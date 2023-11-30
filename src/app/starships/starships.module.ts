import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StarshipsComponent
  ]
})
export class StarshipsModule { }
