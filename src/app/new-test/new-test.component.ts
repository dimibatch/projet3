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
  public tmpTest: Test = new Test();

  constructor(private service: BigService) { }

  ngOnInit() {
    this.onGoingTestState = true;
  }



  // Method to save a Test or OnGoingTest on DB
  // public save(): void {
  //   if (this.onGoingTestState) {
  //   } else if (!this.onGoingTestState) {
  //   }
  // }

  // Method to switch between Add a OnGoingTest & Add a Test
  public switchBetweenOnGoingTestAndTest() {
    if (this.onGoingTestState == false) {
      this.onGoingTestState = true;
    } else {
      this.onGoingTestState = false;
    }
  }
}


