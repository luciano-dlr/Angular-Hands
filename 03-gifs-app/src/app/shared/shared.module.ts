import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { PopupSidebarComponent } from './components/popup-sidebar/popup-sidebar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TogleDrawerComponent } from './components/togle-drawer/togle-drawer.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,
    PopupSidebarComponent,
    SideNavComponent,
    TogleDrawerComponent

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule

  ],
  exports: [
    SidebarComponent,
    LazyImageComponent,
    PopupSidebarComponent,
    SideNavComponent,
    TogleDrawerComponent
  ]
})
export class SharedModule { }

// declarations: [
//   SidebarComponent,
//   LazyImageComponent,



// ],
// imports: [
//   SideNavComponent,
//   CommonModule,
//   TogleDrawerComponent,



// ],
// exports:[
//   SidebarComponent,
//   LazyImageComponent,
//   SideNavComponent,
//   TogleDrawerComponent


// ]
// })
