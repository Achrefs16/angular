import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.css'
})
export class AppareilComponent {
    appareils=[{name:"Refrigerateur",status:"Allumé"},
      {name:"Tv",status:"Eteint"},
      {name:"Micro Onde",status:"Allumé"},
      {name:"Climatiseur",status:"Eteint"},
    ]
    app1 = "Refrigerateur";
    app2 = "Tv";
    app3 = "Micro Onde";
    app4 = "Climatiseur";
    app1_status = "Allumé";
    app2_status = "Eteint";
    app3_status = "Allumé ";
    app4_status = "Eteint";

}
