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


  // PUBLIC KEY
  public readonly VAPID_PUBLIC_KEY = 'BIPZi0FyOoYv-gCEUjEW_mYP1IS5H1tuw77uWvDKHItLhm6SiE-YpOIFRopIKF18cNK2_jM12IuwkCvZV-PQQ3A'


  searchTag(){

    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';


  }

}
