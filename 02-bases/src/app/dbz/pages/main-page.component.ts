import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-db-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

public characters:Character[]=[{
  name:'Krilling',
  power: 1000
},{
  name:'Goku',
  power:9500
},{
  name:'Vegeta',
  power:7500
}]

  onNewCharacter(Character:Character):void{

    console.log('main page',Character)

  }



}
