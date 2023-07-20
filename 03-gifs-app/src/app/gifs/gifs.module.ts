import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoComponent } from './components/search-box/search-box.component';
import { PopupSidebarComponent } from '../shared/components/popup-sidebar/popup-sidebar.component';
import { ButtonSidenavComponent } from './components/button-sidenav/button-sidenav.component';


import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';

import {FormsModule} from '@angular/forms';
import { PushNotiComponent } from './components/push-noti/push-noti.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoComponent,
    CardListComponent,
    GifsCardComponent,
    ButtonSidenavComponent,
    PushNotiComponent
  ],
  imports: [

    CommonModule,
    SharedModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    FormsModule
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
