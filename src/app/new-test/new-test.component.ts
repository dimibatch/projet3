import { Component, OnInit } from '@angular/core';
import { OnGoingTest } from '../on-going-test';
import { BigService } from '../big.service';
import { Test } from '../test';
import { TestFamily } from '../test-family';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {


  private service: BigService;
  public hasAccess: string;
  public families: TestFamily[] = [];
  public familyName: string;
  public isFirstFamily: boolean = false;
  public isSecondFamily: boolean = false;
  public isThirdFamily: boolean = false;


  // Var for choosing the result between C, MC & NC 

  value: any;
  options = [
    {
      id: "Conforme",
      value: 'C'
    },
    {
      id: "Moyen-conforme",
      value: 'MC'
    },
    {
      id: "Non conforme",
      value: 'NC'
    }
  ]

  // Var for switching between OnGoingTest Form & Test Form 

  public onGoingTestState: boolean;

  // Constructors OnGoingTest & Test

  public onGoingTest: OnGoingTest = new OnGoingTest();
  public tmpTest: Test = new Test();

  constructor(private param_service: BigService) {
    this.service = param_service;
  }

  ngOnInit() {
    this.onGoingTestState = true;
    this.hasAccess = sessionStorage.getItem("hasAccess");
    this.service.getTestFamilies().subscribe(
      (param: any) => {
        this.families = param as TestFamily[];
      }
    )
  }

  // Method to save a Test or OnGoingTest on DB

  public save(): void {
    if (this.onGoingTestState) {
      this.service.addTest(this.tmpTest).subscribe();
      this.tmpTest = new Test();
      alert(`Le test a bien été soumis`);
      location.reload();
    } else if (!this.onGoingTestState) {
      this.service.addOnGoingTest(this.onGoingTest).subscribe();
      this.onGoingTest = new OnGoingTest();
      alert(`Le test a bien été soumis`);
      location.reload();
    }
  }

  // Method to switch between Add a OnGoingTest & Add a Test
  public switchBetweenOnGoingTestAndTest() {
    if (this.onGoingTestState == false) {
      this.onGoingTestState = true;
      console.log("Vous vous trouvez sur la zone d'ajout de test à une seule lecture");
    } else {
      this.onGoingTestState = false;
      console.log("Vous vous trouvez sur la zone d'ajout de test à plusieurs lectures");

    }
  }


  //Methods to update the list of test types
  public changeOngoingTestList() {
    let select = document.getElementById("onGoingFamilySelect") as HTMLSelectElement;
    this.familyName = select.value;
    this.onGoingTest.testFamily = select.value;
    if (this.familyName == 'Compatibilité') {
      this.isFirstFamily = true;
      this.isSecondFamily = false;
      this.isThirdFamily = false;
    }
    if (this.familyName == 'Décor') {
      this.isFirstFamily = false;
      this.isSecondFamily = true;
      this.isThirdFamily = false;
    }
    if (this.familyName == 'Fonctionnalité') {
      this.isFirstFamily = false;
      this.isSecondFamily = false;
      this.isThirdFamily = true;
    }
  }

  public changeTestList() {
    let select = document.getElementById("familySelect") as HTMLSelectElement;
    this.familyName = select.value;
    this.tmpTest.testFamily = select.value;
    if (this.familyName == 'Compatibilité') {
      this.isFirstFamily = true;
      this.isSecondFamily = false;
      this.isThirdFamily = false;
    }
    if (this.familyName == 'Décor') {
      this.isFirstFamily = false;
      this.isSecondFamily = true;
      this.isThirdFamily = false;
    }
    if (this.familyName == 'Fonctionnalité') {
      this.isFirstFamily = false;
      this.isSecondFamily = false;
      this.isThirdFamily = true;
    }
  }

  //method to update the onGoingTest attribute 'test'
  public updateOngoingTestToSend() {
    let select = document.getElementById("onGoingTestSelect") as HTMLSelectElement;
    this.onGoingTest.test = select.value;
  }

  //method to update the regular test attribute 'test'
  public updateTestToSend() {
    let select = document.getElementById("testSelect") as HTMLSelectElement;
    this.tmpTest.test = select.value;
  }

  public setTestResult(param) {
    this.tmpTest.result = param;
  }

  public setOnGoingTestResult(param) {
    this.onGoingTest.result = param;
  }
}




