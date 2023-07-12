import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],


  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SideNavComponent {
  showDrawer = false;

  toggleDrawer(): void {
    this.showDrawer = !this.showDrawer;
  }
}
