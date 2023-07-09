import { Component, ViewChild,ElementRef } from '@angular/core';
import { GifsNameService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoComponent  {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsNameService) { }


  searchTag(){

    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';


  }

}
