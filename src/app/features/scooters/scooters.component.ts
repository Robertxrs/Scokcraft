import { Component, OnInit } from '@angular/core';


interface obj {
  path: string,
  imgSrc: string,
  altSrc: string,
  price: string,
  title: string,
  class?: string,
  description: string,
  button: string,
  listIcons:any
}
@Component({
  selector: 'app-scooters',
  templateUrl: './scooters.component.html',
  styleUrls: ['./scooters.component.css']
})
export class ScootersComponent implements OnInit {

  scooter: obj[] = [
    {
      path: '/scooter/3',
      imgSrc: '../../../assets/img/scooter/nimbus.jpeg',
      altSrc: 'scooter vermelha',
      price: '4999',
      title: 'Nimbus Stark',
      description:
        'A Nimbus Stark é a melhor Scooter já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      button: 'Mais Sobre',
      listIcons: [
        {
          icon: '../../../assets/img/icones/eletrica.svg',
          alt: 'Icone de Motor Elétrico',
          subtitle: 'Motor Elétrico',
        },
        {
          icon: '../../../assets/img/icones/carbono.svg',
          alt: 'Icone Fibra de Carbono',
          subtitle: 'Fibra de Carbono',
        },
        {
          icon: '../../../assets/img/icones/velocidade.svg',
          alt: 'Icone de velocidade',
          subtitle: '100 km/h',
        },
        {
          icon: '../../../assets/img/icones/rastreador.svg',
          alt: 'Icone de Rastreador',
          subtitle: 'Rastreador',
        },
      ],
    },
    {
      path: '/scooter/1',
      imgSrc: '../../../assets/img/scooter/magic.jpg',
      altSrc: 'Scooter amarela',
      price: '6499',
      title: 'Magic Might',
      class: 'scooters-bg magic-might',
      description:
        'A Magic Might é a melhor Scooter já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      button: 'Mais Sobre',
      listIcons: [
        {
          icon: '../../../assets/img/icones/eletrica.svg',
          alt: 'Icone de Motor Elétrico',
          subtitle: 'Motor Elétrico',
        },
        {
          icon: '../../../assets/img/icones/carbono.svg',
          alt: 'Icone Fibra de Carbono',
          subtitle: 'Fibra de Carbono',
        },
        {
          icon: '../../../assets/img/icones/velocidade.svg',
          alt: 'Icone de velocidade',
          subtitle: '120 km/h',
        },
        {
          icon: '../../../assets/img/icones/rastreador.svg',
          alt: 'Icone de Rastreador',
          subtitle: 'Rastreador',
        },
      ],
    },
    {
      path: '/scooter/2',
      imgSrc: '../../../assets/img/scooter/nebula.jpg',
      altSrc: 'Bicicleta preta',
      price: '7999',
      title: 'Nebula Cosmic',
      description:
        'A Nebula Cosmic é a melhor Scooter já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      button: 'Mais Sobre',
      listIcons: [
        {
          icon: '../../../assets/img/icones/eletrica.svg',
          alt: 'Icone de Motor Elétrico',
          subtitle: 'Motor Elétrico',
        },
        {
          icon: '../../../assets/img/icones/carbono.svg',
          alt: 'Icone Fibra de Carbono',
          subtitle: 'Fibra de Carbono',
        },
        {
          icon: '../../../assets/img/icones/velocidade.svg',
          alt: 'Icone de velocidade',
          subtitle: '50 km/h',
        },
        {
          icon: '../../../assets/img/icones/rastreador.svg',
          alt: 'Icone de Rastreador',
          subtitle: 'Rastreador',
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
