import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scooter-details',
  templateUrl: './scooter-details.component.html',
  styleUrls: ['./scooter-details.component.css']
})
export class ScooterDetailsComponent implements OnInit {

  id: string = '';
  bike: any = null;

  icons:any = {
    eletric: '../../../../assets/img/icones/eletrica.svg',
    speed: '../../../../assets/img/icones/velocidade.svg',
    tracker: '../../../../assets/img/icones/rastreador.svg',
    fiber: '../../../../assets/img/icones/carbono.svg',
}

  bikes: any = [
    {
      id: '1',
      price: '6499',
      title: 'Magic Might',
      description: 'A Magic Might é a melhor Scooter já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      iconDeliver:'../../../../assets/img/icones/entrega.svg',
      iconStock:'../../../../assets/img/icones/estoque.svg',
      deliver: '5',
      stock: '19',
      titleInfo:'Informações',
      titleTechnical:'Ficha Técnica',
      info: [
        {
          icon: 'eletric',
          title: 'Motor Elétrico',
          description: 'Permite você viajar distâncias inimagináveis com a sua bike',
        },
        {
          icon: 'speed',
          title: '120km/h',
          description: 'A mais rápida bicicleta elétrica disponível hoje no mercado.',
        },
        {
          icon: 'tracker',
          title: 'Rastreador',
          description: 'Rastreador e sistema anti-furto para garantir o seu sossego.',
        },
        {
          icon: 'fiber',
          title: 'Fibra de Carbono',
          description: 'Maior proteção possível para a sua Scokcraft com fibra de carbono.',
        },
      ],
      technicalSheet: {
        weight: '9',
        height: '60',
        width: '120',
        depth: '10',
        marches: '16',
        wheel: '25',
      },
      images: [
        '../../../../assets/img/scooter/magic.jpg',
        '../../../../assets/img/scooter/nebula.jpg',
        '../../../../assets/img/scooter/nimbus.jpeg',
      ],
    },
    {
      id: '2',
      price: '7999',
      title: 'Nebula Cosmic',
      description: 'A Nebula Cosmic é a melhor Scooter já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      deliver: '3',
      stock: '35',
      info: [
        {
          icon: 'eletric',
          title: 'Motor Elétrico',
          description: 'Permite você viajar distâncias inimagináveis com a sua bike',
        },
        {
          icon: 'speed',
          title: '140km/h',
          description: 'A mais rápida bicicleta elétrica disponível hoje no mercado.',
        },
        {
          icon: 'tracker',
          title: 'Rastreador',
          description: 'Rastreador e sistema anti-furto para garantir o seu sossego.',
        },
        {
          icon: 'fiber',
          title: 'Fibra de Carbono',
          description: 'Maior proteção possível para a sua Scokcraft com fibra de carbono.',
        },
      ],
      technicalSheet: {
        weight: '8.5',
        height: '65',
        width: '110',
        depth: '26',
        marches: '12',
        wheel: '26',
      },
      images: [

        '../../../../assets/img/scooter/nebula.jpg',
        '../../../../assets/img/scooter/magic.jpg',
        '../../../../assets/img/scooter/nimbus.jpeg',
      ],
    },
    {
      id: '3',
      price: '4999',
      title: 'Nimbus Stark',
      description: 'A Nimbus Stark é a melhor Scooter já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
      deliver: '5',
      stock: '5',
      info: [
        {
          icon: 'eletric',
          title: 'Motor Elétrico',
          description: 'Permite você viajar distâncias inimagináveis com a sua bike',
        },
        {
          icon: 'speed',
          title: '100km/h',
          description: 'A mais rápida bicicleta elétrica disponível hoje no mercado.',
        },
        {
          icon: 'tracker',
          title: 'Rastreador',
          description: 'Rastreador e sistema anti-furto para garantir o seu sossego.',
        },
        {
          icon: 'fiber',
          title: 'Fibra de Carbono',
          description: 'Maior proteção possível para a sua Scokcraft com fibra de carbono.',
        },
      ],
      technicalSheet: {
        weight: '7.5',
        height: '60',
        width: '90',
        depth: '10',
        marches: '18',
        wheel: '26',
      },
      images: [
        '../../../../assets/img/scooter/nimbus.jpeg',
        '../../../../assets/img/scooter/magic.jpg',
        '../../../../assets/img/scooter/nebula.jpg',
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.bike = this.bikes.find((el: any) => el.id === this.id);
  }
}
