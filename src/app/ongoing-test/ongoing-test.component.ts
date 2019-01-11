import { Component, OnInit } from '@angular/core';
import { OnGoingTest } from '../on-going-test';
import { BigService } from '../big.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
  public hasAccess:string;


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
  }

  // CRUD methods 

  public callTestToModifOrDelete(testid: number) {
    this.bigService.getOnGoingTest(testid).subscribe((param) => { this.testToModifOrDelete = param })
  }

  public deleteTest() {
    this.bigService.deleteOnGoingTestFromDB(this.IdTestToModifOrDelete).subscribe();
    console.log(`Le test ${this.IdTestToModifOrDelete} a bien été supprimé ! `)
  }

  public updateTest() {
    this.bigService.updateOnGoingTestFromDB(this.IdTestToModifOrDelete, this.tmpTest).subscribe();
    console.log(`Le test ${this.IdTestToModifOrDelete} a bien été updaté ! `)
    this.tmpTest = new OnGoingTest();
  }

  public validateTest() {
    this.bigService.validateTest(this.IdTestToModifOrDelete).subscribe();
  }

  // Modal Opening Fuction

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: "lg" });
    console.log(this.IdTestToModifOrDelete);
  }

}
