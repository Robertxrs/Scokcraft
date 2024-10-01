import { Component, OnInit, ɵsetClassMetadata } from '@angular/core';
import { Insurance } from 'src/app/core/modules/insurance';
import { InsuranceService } from 'src/app/core/services/insurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  insurance: Insurance[] = [];

  constructor(private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.insuranceService.getAllInsurance().subscribe((data: Insurance[]) => {
      this.insurance = data;
     })
    }

}
