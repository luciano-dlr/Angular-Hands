import { Component } from '@angular/core';
import { GifsNameService } from 'src/app/gifs/services/gifs.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent {

  //injectado de un servicio, puntualmente el servicio GifsNameService y utilizarlo de manera privada
  //El mismo servicio puede ser utilizado porque en sus atributos tenemos especificado 'root'
  // indica poder usarlo de manera global en la app pero lo utilizamos de manera private para manejar bien la info
  constructor(private gifsService: GifsNameService){}


  get tags(){
    return this.gifsService.tagsHistory;
  }



}
