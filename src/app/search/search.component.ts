import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BigService } from '../big.service';
import { TestFamily } from '../test-family';



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
  @Input() public startDate: string = "";
  @Input() public endDate: string;
  @Input() public typeAC: string = "";
  @Input() public productName: string = "";
  @Input() public campaignCode: string = "";
  @Input() public campaignName: string = "";
  @Input() public franchise: string = "";
  @Input() public cpQCP: string = "";
  @Input() public codeAc: string = "";
  @Input() public provider: string = "";
  @Input() public packModel: string = "";
  @Input() public vracName: string = "";
  @Input() public testFamily: string = "";
  @Input() public derogation: boolean;

  @Output() searchBarContentChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() materialChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() rawMaterialChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() codeGChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() typeDecorChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() vracNumberChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() testTypeChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() resultChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() startDateChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() endDateChange:EventEmitter<string> = new EventEmitter<string>();
  @Output() typeACEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() productNameEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() campaignCodeEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() campaignNameEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() franchiseEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() cpQCPEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() codeAcEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() providerEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() packModelEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() vracNameEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() testFamilyEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() derogationEmitter:EventEmitter<string> = new EventEmitter<string>();
  
  public page: number = 0;
  @Output() backToFirstPage: EventEmitter<number> = new EventEmitter<number>();

  public dictionnary:string[] = ["jupe" , "pp", "copo", "pehd", "tube", "capot", "bpl", "10ml", "12ml","15ml", "30ml","chape", "petite robe noire"]; 

  private bigService: BigService;
  public families: TestFamily[] = [];

  constructor(bigService: BigService) {
    this.bigService = bigService;
   }

  ngOnInit() {
    this.bigService.getTestFamilies().subscribe(
      (param:any)=>{
        this.families = param as TestFamily[];
      }
    )
  }

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
    console.log(this.testType)
  }

  public onChangeStartDate() {
    this.startDateChange.emit(this.startDate);
  }

  public onChangeEndDate() {
    this.endDateChange.emit(this.endDate);
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
    this.result = "MC";
  }

  public typeAcEmission() {
    this.typeACEmitter.emit(this.typeAC);
  }

  public productNameEmission() {
    this.productNameEmitter.emit(this.productName);
  }

  public campaignCodeEmission() {
    this.campaignCodeEmitter.emit(this.campaignCode);
  }

  public campaignNameEmission() {
    this.campaignNameEmitter.emit(this.campaignName);
  }

  public franchiseEmission() {
    this.franchiseEmitter.emit(this.franchise);
  }

  public cpQCPEmission() {
    this.cpQCPEmitter.emit(this.cpQCP);
  }

  public codeAcEmission() {
    this.codeAcEmitter.emit(this.codeAc);
  }

  public providerEmission() {
    this.providerEmitter.emit(this.provider);
  }

  public packModelEmission() {
    this.packModelEmitter.emit(this.packModel);
  }

  public vracNameEmission() {
    this.vracNameEmitter.emit(this.vracName);
  }

  public testFamilyEmission() {
    this.testFamilyEmitter.emit(this.testFamily);
  }

  public derogationEmission(){
    if (this.derogation == true){
      this.derogationEmitter.emit("false");
    } else {
      this.derogationEmitter.emit("true");
    }
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
