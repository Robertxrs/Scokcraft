import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scooters-list',
  templateUrl: './scooters-list.component.html',
  styleUrls: ['./scooters-list.component.css']
})
export class ScootersListComponent implements OnInit {

  scooterList:any = [{
    path:'/scooter/2',
    imgSrc:'../../../assets/img/scooter/nebula.jpg',
    titulo:'Nebula Cosmic',
    valor:'7999'
  },
  {
    path:'/scooter/1',
    imgSrc:'../../../assets/img/scooter/magic.jpg',
    titulo:'Magic Might',
    valor:'6499'
  },
  {
    path:'/scooter/3',
    imgSrc:'../../../assets/img/scooter/nimbus.jpeg',
    titulo:'Nimbus Stark',
    valor:'4999'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
