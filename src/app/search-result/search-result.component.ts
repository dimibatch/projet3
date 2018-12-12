import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../test';
import { BigService } from '../big.service';
import * as Handsontable from "handsontable";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() public searchBarContent:string = "";
  @Input() public material: string = "";
  @Input() public codeG: string = "";
  @Input() public typeDecor: string = "";
  @Input() public vracNumber: string = "";
  @Input() public testType: string = "";
  @Input() public result: string = "";
  @Input() public page:number = 0;


  private bigService:BigService;
  public dataset:Test[];

  // Settings for HandsonTable

  settings = {
    columns: [
      {
        renderer: (instance, td, row, col, prop, value, cellProperties) => {
          Handsontable.renderers.TextRenderer.apply(this, [instance, td, row, col, prop, value, cellProperties]);
          if (value === "NC") {
            // add class "negative"
            td.style.color = 'red';
          }
          return td;
        }
      }
    ]
  }


  constructor(service: BigService) {
    this.bigService = service;
  }

  ngOnInit() {
    this.bigService.getBigData().subscribe(
      (param) => {
        this.dataset = param;
        
      }
    )
    
  }
}



