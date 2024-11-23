import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appareil } from "../../model/appariel";

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  /*
 appareils=[{name:"Refrigerateur",status:"Allumé"},
      {name:"Tv",status:"Eteint"},
      {name:"Micro Onde",status:"Allumé"},
      {name:"Climatiseur",status:"Eteint"},
    ]*/
  constructor(private http: HttpClient) {}
    apiUrl = "http://localhost:3001/api/appareils/";
    getAppareils() : Observable<Appareil[]> {
return this.http.get<Appareil[]>(this.apiUrl);
}

}
