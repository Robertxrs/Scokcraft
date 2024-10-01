import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insurance } from '../modules/insurance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private apiUrl = "http://localhost:8080/api/insurance"

  constructor(private http: HttpClient) {}

  getAllInsurance(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.apiUrl);
  }
}
