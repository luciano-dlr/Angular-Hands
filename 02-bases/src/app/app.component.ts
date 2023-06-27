import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})


export class AppComponent {
  public title: string  = 'Hola Mundo';
  public counter:number = 10;

  public increaseBy(value:number):void{

    // if (value === 1) {
    //   this.counter += 1;
    // } else {
    //   this.counter -= 1;
    // }

    this.counter += value;

  }

  public reset():void{

    this.counter = 10;

  }

}


