import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() public searchBarContent: string = "";
  @Input() public material: string = "";
  @Input() public rawMaterial: string = "";
  @Input() public codeG: string = "";
  @Input() public typeDecor: string = "";
  @Input() public vracNumber: string = "";
  @Input() public testType: string = "";
  @Input() public result: string = "";

  @Output() searchBarContentChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() materialChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() rawMaterialChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() codeGChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() typeDecorChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() vracNumberChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() testTypeChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() resultChange:EventEmitter<string> = new EventEmitter<string>();


  public page: number = 0;
  @Output() backToFirstPage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  public onKeyUp() {
    this.searchBarContentChange.emit(this.searchBarContent);
    this.backToFirstPage.emit(this.page);
  }

  public onKeyUpMaterial() {
    this.materialChange.emit(this.material);
  }

  public onKeyUpRawMaterial() {
    this.rawMaterialChange.emit(this.rawMaterial);
  }

  public onKeyUpCodeG() {
    this.codeGChange.emit(this.codeG);
  }

  public onKeyUpVracNumber() {
    this.vracNumberChange.emit(this.vracNumber);
  }

  public onKeyUpDecorType() {
    this.typeDecorChange.emit(this.typeDecor);
  }

  public onKeyUpTestType() {
    this.testTypeChange.emit(this.testType);
  }

  public onChangeResult() {
    this.resultChange.emit(this.result);
  }

  resultConforme() {
    this.result = "C";
  }

  resultNonConforme() {
    this.result = "NC";
  }

  resultNoFilter() {
    this.result = "";
  }

  resultPTC() {
    this.result = "PTC";
  }
  
   //function that changes the "Historique des tests" tab's color when you click on it
   public changeHistoricTestsColor() {
    if (document.getElementById('historicTests').style.color != "white") {
      document.getElementById('historicTests').style.color = "white";
      document.getElementById('historicTests').style.backgroundColor = "#595959";

      document.getElementById('incompatibilites').style.color = "black";
      document.getElementById('incompatibilites').style.backgroundColor = "white";

    }
  }

  //function that changes the "Incompatibilités" tab's color when you click on it
  public changeIncompatibiliteColor() {
    if (document.getElementById('incompatibilites').style.color != "white") {
      document.getElementById('incompatibilites').style.color = "white";
      document.getElementById('incompatibilites').style.backgroundColor = "#595959";

      document.getElementById('historicTests').style.color = "black";
      document.getElementById('historicTests').style.backgroundColor = "white";

    }
  }

}
