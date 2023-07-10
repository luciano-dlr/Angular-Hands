import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { PopupSidebarComponent } from './components/popup-sidebar/popup-sidebar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';




@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,


  ],
  imports: [
    SideNavComponent,
    CommonModule,



  ],
  exports:[
    SidebarComponent,
    LazyImageComponent,
    SideNavComponent


  ]
})
export class SharedModule { }
