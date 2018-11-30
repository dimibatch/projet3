import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Input() public TriMatNameInsert = "";
  @Input() public TriMatInteractInsert = "";

  constructor() { }

  ngOnInit() {
  }

  public onSearchBarContentChanged(param:string){
    this.TriMatNameInsert = param;
  }

}

