import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isConnected:string = "" ;

  constructor() { }

  //function that changes the "Rechercher" tab's color when you click on it
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
  
  //function that changes the "Tests en cours" tab's color when you click on it
  public changeOngoingTestColor() {
    if (document.getElementById('ongoing-tests-button').style.color != "white") {
    document.getElementById('ongoing-tests-button').style.color = "white";
    document.getElementById('ongoing-tests-button').style.backgroundColor = "black";
    
    document.getElementById('research-button').style.color = "black";
    document.getElementById('research-button').style.backgroundColor = "white";
    
    document.getElementById('new-test-button').style.color = "black";
    document.getElementById('new-test-button').style.backgroundColor = "white";
    }
  }

  //function that changes the "Ajouter un nouveau test" tab's color when you click on it
  public changeNewTestColor() {
    if (document.getElementById('new-test-button').style.color != "white") {
    document.getElementById('new-test-button').style.color = "white";
    document.getElementById('new-test-button').style.backgroundColor = "black";
    
    document.getElementById('ongoing-tests-button').style.color = "black";
    document.getElementById('ongoing-tests-button').style.backgroundColor = "white";
    
    document.getElementById('research-button').style.color = "black";
    document.getElementById('research-button').style.backgroundColor = "white";
    }
  }
  
  public colorButtonBasedOnUrl(){
    if (window.location.toString().toLowerCase().indexOf("ongoingtestpage")>-1){
      this.changeOngoingTestColor();
    } else if (window.location.toString().toLowerCase().indexOf("newtestpage")>-1){
      this.changeNewTestColor();
    } else {
      this.changeResearchColor();
    }
  }

  public logOut(){
    sessionStorage.setItem("hasAccess", "false");
    alert(`Vous avez été déconnecté.`);
    location.reload();
  }
  

  ngOnInit() {
    this.colorButtonBasedOnUrl();
    this.isConnected = sessionStorage.getItem("hasAccess");
  }




}
