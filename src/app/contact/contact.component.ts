import { Component } from '@angular/core';
import { AppareilsService } from "../appareils.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 appareils :any =[]

    constructor(private app:AppareilsService){
      this.appareils=this.app.appareils

    }
}
