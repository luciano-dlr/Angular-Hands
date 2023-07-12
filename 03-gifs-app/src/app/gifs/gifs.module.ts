import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoComponent } from './components/search-box/search-box.component';
import { PopupSidebarComponent } from '../shared/components/popup-sidebar/popup-sidebar.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoComponent,
    CardListComponent,
    GifsCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
// declarations: [
//   HomePageComponent,
//   SearchBoComponent,
//   CardListComponent,
//   GifsCardComponent,
//   PopupSidebarComponent

// ],
// imports: [

//   CommonModule,
//   SharedModule,



// ],
// exports: [
//   HomePageComponent,
// ]
