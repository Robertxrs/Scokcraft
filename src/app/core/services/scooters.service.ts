import { Injectable } from '@angular/core';
import { Scooter } from '../modules/scooter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScootersService {

  private readonly API = '../../../assets/scooter.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return (this.httpClient.get<Scooter[]>(this.API));
  }
}
