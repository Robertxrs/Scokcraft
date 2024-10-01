import { Injectable } from '@angular/core';
import { Scooter } from '../modules/scooter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScootersService {

  private apiUrl = 'http://localhost:8080/api/scooters';

  constructor(private http: HttpClient) {}


  getAllScooters(): Observable<Scooter[]> {
    return this.http.get<Scooter[]>(this.apiUrl);
  }


  getScooterById(id: string): Observable<Scooter> {
    return this.http.get<Scooter>(`${this.apiUrl}/${id}`);
  }
}
