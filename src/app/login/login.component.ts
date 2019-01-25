import { Component, OnInit } from '@angular/core';
import { BigService } from '../big.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLog: User = new User();
  public tmpUser: User;
  public dislayWrongConnectionMessage: boolean = false;
  public displaySuccessConnectionMessage:boolean = false;

  constructor() {
  }

  ngOnInit() {
    if(sessionStorage.getItem("hasAccess") == "true"){
      this.displaySuccessConnectionMessage = true;
      setTimeout(() => {
        this.displaySuccessConnectionMessage = false;
      }, 3000);
    }
  }


  public loginCheck() {
    if (this.userLog.identifiant == "guerlainhomolog" && this.userLog.password == "jetravaillechezguerlain") {
      sessionStorage.setItem("hasAccess", "true");
    } else {
      sessionStorage.setItem("hasAccess", "false");
      this.dislayWrongConnectionMessage = true;
      setTimeout(() => {
        this.dislayWrongConnectionMessage = false;
      }, 3000);
    }

    if(sessionStorage.getItem("hasAccess") == "true"){
      location.reload();
      
    }
    
  }

  public changeResearchColor() {
    if (document.getElementById('research-button').style.color != "white") {
    document.getElementById('research-button').style.color = "white";
    document.getElementById('research-button').style.backgroundColor = "black";
    
    document.getElementById('ongoing-tests-button').style.color = "black";
    document.getElementById('ongoing-tests-button').style.backgroundColor = "white";
    
    document.getElementById('new-test-button').style.color = "black";
    document.getElementById('new-test-button').style.backgroundColor = "white";
    }
  }


}