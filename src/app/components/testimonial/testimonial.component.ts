import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonialInfo: any = {
    imgSrc:'../../../assets/img/fotos/depoimento.jpeg',
    description:'Dirigir sempre foi a minha paixão, o que o pessoal da Scokcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo.',
    name:'Carlos Eduardo',
    width:'1560',
    height:'1360',
    alt:'Scooter preta',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
