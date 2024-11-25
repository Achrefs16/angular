import { Component, OnInit } from '@angular/core';
import { AppareilsService } from '../appareils.service';
import { Appareil } from '../../../model/appariel'; 

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  appareils: Appareil[] = [];
  name: string = ''; // Déclarez la propriété `name`

  constructor(private appareilsService: AppareilsService) {}

  ngOnInit(): void {
    this.fetchAppareils();
  }

  private fetchAppareils(): void {
    this.appareilsService.getAppareils().subscribe({
      next: (data) => {
        this.appareils = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des appareils :', error);
      }
    });
  }

  onAllumer(): void {
    if (confirm("Êtes-vous sûr de vouloir allumer tous les appareils ?")) {
      this.appareils = this.appareils.map(appareil => ({
        ...appareil,
        status: 'Allumé'
      }));
    }
  }

  onEteindre(): void {
    if (confirm("Êtes-vous sûr de vouloir éteindre tous les appareils ?")) {
      this.appareils = this.appareils.map(appareil => ({
        ...appareil,
        status: 'Eteint'
      }));
    }
  }
}
