import { Component, OnInit } from '@angular/core';
import { BigService } from '../big.service';
import { OnGoingTest } from '../on-going-test';


@Component({
  selector: 'app-ongoingtestresult',
  templateUrl: './ongoingtestresult.component.html',
  styleUrls: ['./ongoingtestresult.component.css']
})
export class OngoingtestresultComponent implements OnInit {
  private bigService:BigService;
  public dataset:OnGoingTest[];

  constructor(service: BigService) {
    this.bigService = service;
  }

  ngOnInit() {
    this.bigService.getOnGoingTestsData().subscribe(
      (param) => {
        this.dataset = param;
        
      }
    )
    
  }

}

 
