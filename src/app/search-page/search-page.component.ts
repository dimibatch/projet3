import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Input() public searchBarContent: string = "";
  @Input() public page: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public onSearchBarContentChanged(param: string) {
    this.searchBarContent = param;
  }

  public onBackToFirstPage(param: number) {
    this.page = param;
  }

  public pageUp(): void {
    this.page++;
    console.log(this.page);
  }

  public pageDown(): void {
    if (this.page > 0) {
      this.page--
    }
    console.log(this.page);

  }


}

