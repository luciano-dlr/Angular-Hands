import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-sidebar',
  templateUrl: './popup-sidebar.component.html',
  styleUrls: ['./popup-sidebar.component.css'],
  // moduleId: module.id
})
export class PopupSidebarComponent {

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
