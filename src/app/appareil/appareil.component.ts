import { Component } from '@angular/core';
import { AppareilsService } from "../appareils.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.css'
})
export class AppareilComponent {


    appareils :any =[]

    constructor(private app:AppareilsService){
      this.appareils=this.app.appareils

    }
    app1 = "Refrigerateur";
    app2 = "Tv";
    app3 = "Micro Onde";
    app4 = "Climatiseur";
    app1_status = "Allumé";
    app2_status = "Eteint";
    app3_status = "Allumé ";
    app4_status = "Eteint";
 name: string = '';


 onallumer(){
  if (confirm("Are you sure")) {
      for (let app of this.appareils) {
    app.status='Allumé'
    
  }
  }

 }
  oneteint(){
  if (confirm("Are you sure")) {
      for (let app of this.appareils) {
    app.status='Eteint'
    
  }
 }
}

}
