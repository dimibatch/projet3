import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() public searchBarContent: string = "";
  @Output() searchBarContentChange: EventEmitter<string> = new EventEmitter<string>();

  public page: number = 0;
  @Output() backToFirstPage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  public onKeyUp() {
    this.searchBarContentChange.emit(this.searchBarContent);
    this.backToFirstPage.emit(this.page);
  }

  //function that changes the "Historique des tests" tab's color when you click on it
  public changeHistoricTestsColor() {
    if (document.getElementById('historicTests').style.color != "white") {
      document.getElementById('historicTests').style.color = "white";
      document.getElementById('historicTests').style.backgroundColor = "#595959";

      document.getElementById('incompatibilites').style.color = "black";
      document.getElementById('incompatibilites').style.backgroundColor = "white";

    }
  }

  //function that changes the "Incompatibilités" tab's color when you click on it
  public changeIncompatibiliteColor() {
    if (document.getElementById('incompatibilites').style.color != "white") {
      document.getElementById('incompatibilites').style.color = "white";
      document.getElementById('incompatibilites').style.backgroundColor = "#595959";

      document.getElementById('historicTests').style.color = "black";
      document.getElementById('historicTests').style.backgroundColor = "white";

    }
  }

}
