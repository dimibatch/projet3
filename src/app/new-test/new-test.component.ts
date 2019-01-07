import { Component, OnInit } from '@angular/core';
import { OnGoingTest } from '../on-going-test';
import { BigService } from '../big.service';
import { Test } from '../test';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {


  private service: BigService;

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
  }



  // Method to save a Test or OnGoingTest on DB

  public save(): void {
    if (this.onGoingTestState) {
      this.service.addTest(this.tmpTest).subscribe();
      this.tmpTest = new Test();
    } else if (!this.onGoingTestState) {
      this.service.addOnGoingTest(this.onGoingTest).subscribe();
      this.onGoingTest = new OnGoingTest();
    }
  }

  // Method to switch between Add a OnGoingTest & Add a Test
  public switchBetweenOnGoingTestAndTest() {
    if (this.onGoingTestState == false) {
      this.onGoingTestState = true;
      console.log("C'est l'autre zone");
    } else {
      this.onGoingTestState = false;
      console.log("Vous vous trouvez sur la zone d'ajout de test à plusieurs lectures");

    }
  }

  public setTestResult(param){
    this.tmpTest.result = param;
  }

  public setOnGoingTestResult(param){
    this.onGoingTest.result = param;
  }

  public DEBUG(){
    console.log(this.onGoingTest.DebutReel);
  }

}




