import { Component, OnInit } from '@angular/core';
import { OnGoingTest } from '../on-going-test';
import { BigService } from '../big.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Route } from '@angular/compiler/src/core';
import { Router, UrlTree } from '@angular/router';
import { TestFamily } from '../test-family';


@Component({
  selector: 'app-ongoing-test',
  templateUrl: './ongoing-test.component.html',
  styleUrls: ['./ongoing-test.component.css']
})
export class OngoingTestComponent implements OnInit {

  private bigService: BigService;
  public dataset: OnGoingTest[] = [];


  // Variable for calling & displaying the test & modif or delete it 
  public tmpTest = new OnGoingTest();
  public IdTestToModifOrDelete: number = 0;
  public testToModifOrDelete: OnGoingTest;
  public hasAccess: string;
  public families:TestFamily[] = [];
  public familyName: string;
  public isFirstFamily: boolean = false;
  public isSecondFamily: boolean = false;
  public isThirdFamily: boolean = false;

  constructor(service: BigService, private modalService: NgbModal) {
    this.bigService = service;
  }

  ngOnInit() {
    this.bigService.getOnGoingTestsData().subscribe(
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
    this.bigService.getOnGoingTest(testid).subscribe((param) => { this.testToModifOrDelete = param })
  }

  public deleteTest() {
    this.bigService.deleteOnGoingTestFromDB(this.IdTestToModifOrDelete).subscribe();
    alert(`Le test ${this.IdTestToModifOrDelete} a bien été supprimé.`);
    location.reload();
  }

  public updateTest() {
    this.bigService.updateOnGoingTestFromDB(this.IdTestToModifOrDelete, this.tmpTest).subscribe();
    alert(`Le test ${this.IdTestToModifOrDelete} a bien été mis à jour.`);
    location.reload();
  }

  public validateTest() {
    this.bigService.validateTest(this.IdTestToModifOrDelete).subscribe();
    alert(`Le test ${this.IdTestToModifOrDelete} a bien été validé.`);
    location.reload();
  }

  // Modal Opening Fuction

  openVerticallyCentered(content) {
    this.modalService.open(content, { windowClass: "my-class" });
    console.log(this.IdTestToModifOrDelete);
  }

  //Press Enter to open Modal
  onEnter(content, testid:number) {
    if (testid > 0) {
      this.openVerticallyCentered(content);
      this.callTestToModifOrDelete(testid);
    }
    
  }

  //Methods to update the list of test types
  public changeOngoingTestList(){
    let select = document.getElementById("familySelectOngoingModal") as HTMLSelectElement;
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
