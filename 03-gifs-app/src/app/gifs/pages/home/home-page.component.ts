import { Component } from '@angular/core';
import { GifsNameService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

import { PopupSidebarComponent } from 'src/app/shared/components/popup-sidebar/popup-sidebar.component';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private gifsService: GifsNameService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
