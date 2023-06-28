import { NgModule } from "@angular/core";

// Solucion al error.... Angular no reconoce la directiva 'ngIf' en el componente 'HeroComponent'.
import { CommonModule } from '@angular/common';


import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations:[

    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]

})

export class HeroesModule {}
