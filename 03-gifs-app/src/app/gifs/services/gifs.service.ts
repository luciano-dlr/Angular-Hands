import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({providedIn: 'root'})
export class GifsNameService {

  private _tagHistory:string[]=[];
  private apiKey: string = 'S8TJ8IQ1tQgUeA4vJf9ApqqasSUcq3Wr'

  constructor(private http:HttpClient ) { }

  get tagsHistory(){
    return [...this._tagHistory];
  }

  //metodos privados
   private organizeHistory(tag:string){

    //  pasamos los tags a lowercase para luego hacer un filtro y devolver
    // los tags que nos importa
    tag = tag.toLocaleLowerCase();

    if(this._tagHistory.includes(tag)){
      //  Solo los tags diferentes a oldTags van a pasar por el metodo filter y
      // tendremos un array con los oldtag diferentes
      this._tagHistory=this._tagHistory.filter((oldTag)=> oldTag !== tag )
    }

    //insertar el nuevo tag al inicio
    this._tagHistory.unshift(tag)
    this._tagHistory = this.tagsHistory.splice(0,10)

   }

 searchTag(tag:string):void{

    if(tag.length === 0) return ;
    this.organizeHistory(tag);

    this.http.get('http://api.giphy.com/v1/gifs/search?api_key=S8TJ8IQ1tQgUeA4vJf9ApqqasSUcq3Wr&q=la garra&limit=10')



    console.log(this.tagsHistory)
   }


}
