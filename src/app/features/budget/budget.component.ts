import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  budget: any = {
    title: 'solicite um orçamento',
    subtitle: 'Cotações no seu email',
    titleProduct: 'Scooter ou Seguro?',
  };

  type: any = {
    choice: [
      {
        type: 'radio',
        name: 'tipo',
        value: 'scooter',
        id: 'bikcraft',
        for: 'bikcraft',
        text: 'Scooter',
      },
      {
        type: 'radio',
        name: 'tipo',
        value: 'seguro',
        id: 'seguro',
        for: 'seguro',
        text: 'Seguro',
      },
    ],
    bike: [
      {
        type: 'radio',
        name: 'produto',
        value: 'nimbus',
        id: 'nimbus',
        for: 'nimbus',
        nameProd: 'Nimbus Stark',
        price: '4999',
        icon: [
          {
            imgSrc: '../../../assets/img/icones/eletrica.svg',
            alt: 'Icone de Motor Elétrico',
            text: 'Motor Elétrico',
          },
          {
            imgSrc: '../../../assets/img/icones/carbono.svg',
            alt: 'Icone de Fibra de Carbono',
            text: 'Fibra de Carbono',
          },
          {
            imgSrc: '../../../assets/img/icones/velocidade.svg',
            alt: 'Icone de Velocidade',
            text: '100 km/h',
          },
          {
            imgSrc: '../../../assets/img/icones/rastreador.svg',
            alt: 'Icone de Rastreador',
            text: 'Rastreador',
          },
        ],
        img: '../../../assets/img/scooter/nimbus.jpeg',
        alt: 'Scooter vermelha',
      },
      {
        type: 'radio',
        name: 'produto',
        value: 'magic',
        id: 'magic',
        for: 'magic',
        nameProd: 'Magic Might',
        price: '6499',
        icon: [
          {
            imgSrc: '../../../assets/img/icones/eletrica.svg',
            alt: 'Icone de Motor Elétrico',
            text: 'Motor Elétrico',
          },
          {
            imgSrc: '../../../assets/img/icones/carbono.svg',
            alt: 'Icone de Fibra de Carbono',
            text: 'Fibra de Carbono',
          },
          {
            imgSrc: '../../../assets/img/icones/velocidade.svg',
            alt: 'Icone de Velocidade',
            text: '120 km/h',
          },
          {
            imgSrc: '../../../assets/img/icones/rastreador.svg',
            alt: 'Icone de Rastreador',
            text: 'Rastreador',
          },
        ],
        img: '../../../assets/img/scooter/magic.jpg',
        alt: 'Scooter amarela',
      },
      {
        type: 'radio',
        name: 'produto',
        value: 'nebula',
        id: 'nebula',
        for: 'nebula',
        nameProd: 'Nebula Cosmic',
        price: '7999',
        icon: [
          {
            imgSrc: '../../../assets/img/icones/eletrica.svg',
            alt: 'Icone de Motor Elétrico',
            text: 'Motor Elétrico',
          },
          {
            imgSrc: '../../../assets/img/icones/carbono.svg',
            alt: 'Icone de Fibra de Carbono',
            text: 'Fibra de Carbono',
          },
          {
            imgSrc: '../../../assets/img/icones/velocidade.svg',
            alt: 'Icone de Velocidade',
            text: '140 km/h',
          },
          {
            imgSrc: '../../../assets/img/icones/rastreador.svg',
            alt: 'Icone de Rastreador',
            text: 'Rastreador',
          },
        ],
        img: '../../../assets/img/scooter/nebula.jpg',
        alt: 'Scooter preta',
      },
    ],
    choicePlan: [
      {
        type: 'radio',
        name: 'produto',
        value: 'prata',
        id: 'prata',
        for: 'prata',
        text: 'Prata',
        price: '199',
      },
      {
        type: 'radio',
        name: 'produto',
        value: 'ouro',
        id: 'ouro',
        for: 'ouro',
        text: 'Ouro',
        price: '299',
      },
    ],
    budgetPersonal: [
      {
        for: 'nome',
        text: 'Nome',
        type: 'text',
        id: 'nome',
        name: 'nome',
        placeholder: 'Seu nome',
        required: true,
      },
      {
        for: 'sobrenome',
        text: 'Sobrenome',
        type: 'text',
        id: 'sobrenome',
        name: 'sobrenome',
        placeholder: 'Seu Sobrenome',
      },
      {
        class: 'col-2',
        for: 'cpf',
        text: 'CPF',
        type: 'text',
        id: 'cpf',
        name: 'cpf',
        placeholder: '000.000.000-00',
        required: true,
      },
      {
        class: 'col-2',
        for: 'email',
        text: 'Email',
        type: 'email',
        id: 'email',
        name: 'email',
        placeholder: 'contato@gmail.com',
        required: true,
      }
    ],
    budgetDelivery:[
      {
        for: 'cep',
        text: 'CEP',
        type: 'text',
        id: 'cep',
        name: 'name',
        placeholder: '000.00.00-00',
        required: true,
      },
      {
        for: 'numero',
        text: 'Número',
        type: 'text',
        id: 'numero',
        name: 'numero',
        placeholder: '',
      },
      {
        for: 'logradouro',
        text: 'Rua',
        type: 'text',
        id: 'logradouro',
        name: 'logradouro',
        placeholder: '',
      },
      {
        for: 'bairro',
        text: 'Bairro',
        type: 'text',
        id: 'bairro',
        name: 'bairro',
        placeholder: '',
      },
      {
        for: 'cidade',
        text: 'Cidade',
        type: 'text',
        id: 'cidade',
        name: 'cidade',
        placeholder: '',
      },{
        for: 'estado',
        text: 'Estado',
        type: 'text',
        id: 'estado',
        name: 'estado',
        placeholder: '',
      }
    ]

  };

  constructor() {}

  ngOnInit(): void {}
}
