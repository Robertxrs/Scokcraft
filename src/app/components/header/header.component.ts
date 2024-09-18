import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerList: any = [
    {
      titulo:'Scooter',
      path:'/scooter'
    },
    {
      titulo:'Seguros',
      path:'/insurance'

    },
    {
      titulo:'Contato',
      path:'/contact'
    }
  ]

  @Input() recebeInformacaoDoPai?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
