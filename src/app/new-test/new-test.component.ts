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

  // Var for switching between OnGoingTest Form & Test Form 
  public onGoingTestState: boolean;


  // Constructors OnGoingTest & Test

  public onGoingTest: OnGoingTest = new OnGoingTest();
  public test: Test = new Test();

  constructor(private service: BigService) { }

  ngOnInit() {
    this.onGoingTestState = true;
  }

  public newOnGoingTest(): void {

  }

  public newTest(): void {

  }

  // Method to save a Test or OnGoingTest on DB
  public save(): void {
    if (this.onGoingTestState) {
      this.service.addOnGoingTest(this.onGoingTest).subscribe(data => console.log(data), error => console.log(error));
    } else {
      this.service.addTest(this.test).subscribe(data => console.log(data), error => console.log(error));  
    }
  }

  // Method to switch between Add a OnGoingTest & Add a Test
  public switchBetweenOnGoingTestAndTest() {
    if (this.onGoingTestState == false) {
      this.onGoingTestState = true;
    } else {
      this.onGoingTestState = false;
    }
  }

  public DEBUGFUNCTION(){
    console.log(this.onGoingTest);
    console.log(this.test);
  }

}


