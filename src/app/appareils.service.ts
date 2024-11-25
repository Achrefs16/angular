import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Appareil } from '../../model/appariel'; // Vérifiez le chemin
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  private apiUrl = "http://localhost:3001/api/appareils";

  constructor(private http: HttpClient) {}

  getAppareils(): Observable<Appareil[]> {
    return this.http.get<Appareil[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des appareils :', error);
        return throwError(() => new Error('Erreur réseau ou serveur.'));
      })
    );
  }
}
