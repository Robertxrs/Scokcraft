import { ScootersService } from './../../core/services/scooters.service';
import { Scooter } from './../../core/modules/scooter';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-scooters',
  templateUrl: './scooters.component.html',
  styleUrls: ['./scooters.component.css']
})
export class ScootersComponent implements OnInit {


  scooter: Scooter[] = [];

  constructor(private scootersService: ScootersService) {}

  ngOnInit(): void {
    this.scootersService.getAllScooters().subscribe((data: Scooter[]) => {
      this.scooter = data;
    });
  }
}
