import { Component, OnInit } from '@angular/core';
import { OnGoingTest } from '../on-going-test';
import { BigService } from '../big.service';

@Component({
  selector: 'app-on-going-test-array',
  templateUrl: './on-going-test-array.component.html',
  styleUrls: ['./on-going-test-array.component.css']
})
export class OnGoingTestArrayComponent implements OnInit {

  private bigService: BigService;
  public dataset: OnGoingTest[];

  constructor(service: BigService) {  
    this.bigService = service;
  }

  ngOnInit() {
    this.bigService.getOnGoingTestData().subscribe(
      (param) => {
        this.dataset = param;
      }
    )
  }

}
