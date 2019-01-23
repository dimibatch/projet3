import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../test';
import { BigService } from '../big.service';
import * as Handsontable from "handsontable";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestFamily } from '../test-family';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  // Variables from filters & searchBar
  @Input() public searchBarContent: string = "";
  @Input() public material: string = "";
  @Input() public codeG: string = "";
  @Input() public typeDecor: string = "";
  @Input() public vracNumber: string = "";
  @Input() public testType: string = "";
  @Input() public result: string = "";
  @Input() public startDate: string;
  @Input() public endDate: string;
  @Input() public page: number = 0;
  @Input() public typeAC: string = "";
  @Input() public productName: string = "";
  @Input() public campaignCode: string = "";
  @Input() public campaignName: string = "";
  @Input() public franchise: string = "";
  @Input() public cpQCP: string = "";
  @Input() public codeAC: string = "";
  @Input() public provider: string = "";
  @Input() public packModel: string = "";
  @Input() public vracName: string = "";
  @Input() public testFamily: string = "";
  @Input() public derogation: string = "";


  private bigService: BigService;
  public dataset: Test[] = [];
  public families:TestFamily[] = [];
  public familyName: string;
  public isFirstFamily: boolean = false;
  public isSecondFamily: boolean = false;
  public isThirdFamily: boolean = false;

  // Variables for update a test

  public tmpTest = new Test();

  // Variable for calling & displaying the test & modif or delete it 

  public IdTestToModifOrDelete: number = 0;
  public testToModifOrDelete: Test;
  public hasAccess: string;

  closeResult: string;

  constructor(service: BigService, private modalService: NgbModal) {
    this.bigService = service;
  }

  ngOnInit() {
    this.bigService.getBigData().subscribe(
      (param) => {
        this.dataset = param;
      }
    )
    this.hasAccess = sessionStorage.getItem("hasAccess");
    this.bigService.getTestFamilies().subscribe(
      (param:any)=>{
        this.families = param as TestFamily[];
      }
    )
  }

  // CRUD methods 

  public callTestToModifOrDelete(testid: number) {
    this.bigService.getTest(testid).subscribe((param) => { this.testToModifOrDelete = param })
  }

  public deleteTest() {
    this.bigService.deleteTestFromDB(this.IdTestToModifOrDelete).subscribe();
    alert(`Le test ${this.IdTestToModifOrDelete} a bien été supprimé.`);
    location.reload();

  }

  public updateTest() {
    this.bigService.updateTestFromDB(this.IdTestToModifOrDelete, this.tmpTest).subscribe();
    alert(`Le test ${this.IdTestToModifOrDelete} a bien été mis à jour.`);
    location.reload();

  }

  // Modal Opening Fuction

  openVerticallyCentered(content) {
    this.modalService.open(content, { windowClass: "my-class" });
    console.log(this.IdTestToModifOrDelete);
  }

  //Methods to update the list of test types
  public changeOngoingTestList(){
    let select = document.getElementById("familySelectSearchModal") as HTMLSelectElement;
    this.familyName = select.value;
    this.tmpTest.testFamily = select.value;
    if (this.familyName == 'Compatibilité'){
      this.isFirstFamily = true;
      this.isSecondFamily = false;
      this.isThirdFamily = false;
    }
    if (this.familyName == 'Décor'){
      this.isFirstFamily = false;
      this.isSecondFamily = true;
      this.isThirdFamily = false;
    }
    if (this.familyName == 'Fonctionnalité'){
      this.isFirstFamily = false;
      this.isSecondFamily = false;
      this.isThirdFamily = true;
    }
  }



}





