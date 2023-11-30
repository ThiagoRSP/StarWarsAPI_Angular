import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsModule } from './planets/planets.module';
import { StarshipsModule } from './starships/starships.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PeopleModule,
    PlanetsModule,
    StarshipsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
