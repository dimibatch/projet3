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
  @Input() public startDate: string = "";
  @Input() public endDate: string = "";
  @Input() public page: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public onSearchBarContentChanged(param: string) {
    this.searchBarContent = param;
  }

  public onCodeGChanged(param:string){
    this.codeG = param;
    this.page = 0;
  }

  public onTypeDecorChanged(param:string){
    this.typeDecor = param;
    this.page = 0;
  }

  public onMaterialChanged(param:string){
    this.material = param;
    this.page = 0;
  }

  public onVracNumberChanged(param:string){
    this.vracNumber = param;
    this.page = 0;
  }

  public onTestTypeChanged(param:string){
    this.testType = param;
    this.page = 0;
  }

  public onResultChanged(param:string){
    this.result = param;
    this.page = 0;
  }
  public onBackToFirstPage(param: number) {
    this.page = param;
    this.page = 0;
  }

  public onStartDateChanged(param: string) {
    this.startDate = param;
    this.page = 0;
  }

  public onEndDateChanged(param: string) {
    this.endDate = param;
    this.page = 0;
  }

  public pageUp(): void {
    this.page++;
    console.log(this.page);
  }

  public pageDown(): void {
    if (this.page > 0) {
      this.page--
    }
    console.log(this.page);

  }


}

