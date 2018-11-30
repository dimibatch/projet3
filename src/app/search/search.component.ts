import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() public searchBarContent: string = "";

  @Output() searchBarContentChange:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  public onKeyUp(){
    this.searchBarContentChange.emit(this.searchBarContent);
  }

}
