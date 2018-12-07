import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Input() public searchBarContent = "";
  @Input() public material:string = "";

  constructor() { }

  ngOnInit() {
  }

  public onSearchBarContentChanged(param:string){
    this.searchBarContent = param;
  }

  public onMaterialChanged(param:string){
    this.material = param;
  }

}

