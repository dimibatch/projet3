import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 // function that changes the "Historique des tests" tab's color when you click on it
  public changeHistoricTestsColor() {
    if (document.getElementById('historicTests').style.color !== 'white') {
    document.getElementById('historicTests').style.color = 'white';
    document.getElementById('historicTests').style.backgroundColor = 'black';
    document.getElementById('incompatibilites').style.color = 'black';
    document.getElementById('incompatibilites').style.backgroundColor = 'white';
    }
  }
  // function that changes the "Incompatibilités" tab's color when you click on it
  public changeIncompatibiliteColor() {
    if (document.getElementById('incompatibilites').style.color !== 'white') {
    document.getElementById('incompatibilites').style.color = 'white';
    document.getElementById('incompatibilites').style.backgroundColor = 'black';
    document.getElementById('historicTests').style.color = 'black';
    document.getElementById('historicTests').style.backgroundColor = 'white';
    }
  }

}

