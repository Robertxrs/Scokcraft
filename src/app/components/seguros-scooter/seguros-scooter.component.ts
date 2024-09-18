import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguros-scooter',
  templateUrl: './seguros-scooter.component.html',
  styleUrls: ['./seguros-scooter.component.css']
})
export class SegurosScooterComponent implements OnInit {

  seguroScooter: any = {
    imgSrc:'../../../../assets/img/fotos/seguros.jpg',
    altSrc:'Pessoa no scooter eletrico.',
    title:'Dirija mais tranquilo com o nosso',
    description:'Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite diversos benefícios.',
    button:'Conheça Mais'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
