import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter <number> =new EventEmitter();


  onDeleteId(indexValue:number){

    console.log('soy un valor',indexValue)
    // let id = indexValue
    // return id;
    // const deletedCharacter = this.characterList[indexValue];
    this.onDelete.emit(indexValue);
  }


  // ondDeleteCharacter(index:number):void{
  //   // 1 Emitir el id del personaje


  //   // console.log(index,this.characters.indexOf)
  // }
}


