import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Input() public searchBarContent = "";
  @Input() public material:string = "";
  @Input() public rawMaterial: string = "";
  @Input() public codeG: string = "";
  @Input() public typeDecor: string = "";
  @Input() public vracNumber: string = "";
  @Input() public testType: string = "";
  @Input() public result: string = "";

  constructor() { }

  ngOnInit() {
  }

  public onSearchBarContentChanged(param:string){
    this.searchBarContent = param;
  }

  public onCodeGChanged(param:string){
    this.codeG = param;
  }

  public onTypeDecorChanged(param:string){
    this.typeDecor = param;
  }

  public onMaterialChanged(param:string){
    this.material = param;
  }

  public onVracNumberChanged(param:string){
    this.vracNumber = param;
  }

  public onTestTypeChanged(param:string){
    this.testType = param;
  }

  public onResultChanged(param:string){
    this.result = param;
  }

}

