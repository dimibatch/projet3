import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Input() public searchBarContent = "";

  constructor() { }

  ngOnInit() {
  }

  public onSearchBarContentChanged(param:string){
    this.searchBarContent = param;
  }

}

