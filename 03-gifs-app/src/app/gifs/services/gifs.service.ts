import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from '@angular/common/http';
import { SearchResponse,Gif } from '../interfaces/gifs.interfaces';



@Injectable({providedIn: 'root'})
export class GifsNameService {

  public gifList: Gif [] =[]

  private _tagHistory:string[]=[];
  private apiKey: string = 'S8TJ8IQ1tQgUeA4vJf9ApqqasSUcq3Wr'
  private serviceUrl:string = 'http://api.giphy.com/v1/gifs'

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

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe((resp) => {

      this.gifList=resp.data;

      console.log('objeto gifsList.service',{gifs:this.gifList})
    });


    console.log('tagHistory.service',this.tagsHistory)
   }


}
