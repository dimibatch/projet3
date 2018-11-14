import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OngoingTestComponent } from './ongoing-test/ongoing-test.component';
import { NewTestComponent } from './new-test/new-test.component';
import { SearchPageComponent } from './search-page/search-page.component';

const ROUTES:Route[] = 
[
  {path:"searchPage", component:SearchComponent},
  {path:"ongoingtestPage", component:OngoingTestComponent},
  {path:"newtestPage", component:NewTestComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OngoingTestComponent,
    NewTestComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
