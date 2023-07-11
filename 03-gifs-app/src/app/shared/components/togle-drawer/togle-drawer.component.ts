import { Component } from '@angular/core';

@Component({
  selector: 'app-togle-drawer',
  templateUrl: './togle-drawer.component.html',
  styleUrls: ['./togle-drawer.component.css']
})
export class TogleDrawerComponent {

  showDrawer = false;

  toggleDrawer():void {
    this.showDrawer = !this.showDrawer;
  }
}
