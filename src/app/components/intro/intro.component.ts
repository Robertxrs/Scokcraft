import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  introContent: any = {
    title:'Scooter feitas sob medida',
    description:'Scooter elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Scooter.',
    button:'Escolha a sua',
    sourceSrc:'../../../assets/img/scooter/scooter-main.jpg',
    imgSrc:'../../../assets/img/fotos/scooter-intro.jpg',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
