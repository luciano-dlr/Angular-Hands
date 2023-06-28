import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';


import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/Heroes.Module';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,



  ],

  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
