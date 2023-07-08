import { Component, ViewChild,ElementRef } from '@angular/core';
import { GifsNameService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `


  <!-- <h5 class="text-light">Buscar</h5> -->
  <div class="p-3">

    <input type="text"
    class="form-control"
    placeholder="Buscar Gifs"
    (keyup.enter)="searchTag()"
    #txtTagInput
    >

  </div>

  `
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
