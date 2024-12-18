import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppareilComponent } from "./appareil/appareil.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
 {path:'home', component:WelcomeComponent },
   {path:'appareils', component:AppareilComponent },
      {path:'contact', component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
