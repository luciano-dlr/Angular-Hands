import { Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-togle-drawer',
  templateUrl: './togle-drawer.component.html',
  styleUrls: ['./togle-drawer.component.css'],



})
export class TogleDrawerComponent {
  @Input() showDrawer = false;

  toggleDrawer(): void {
    this.showDrawer = !this.showDrawer;
  }
}
