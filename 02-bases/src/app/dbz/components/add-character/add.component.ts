import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter <Character> =new EventEmitter();


  public Character:Character = {
    name:'',
    power: 0
  };


  emitCharacter():void{
    console.log(this.Character)

    if(this.Character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.Character);

    this.Character.name= '';
    this.Character.power= 0;
  }
}
