import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
 appareils=[{name:"Refrigerateur",status:"Allumé"},
      {name:"Tv",status:"Eteint"},
      {name:"Micro Onde",status:"Allumé"},
      {name:"Climatiseur",status:"Eteint"},
    ]
  constructor() { }
}
