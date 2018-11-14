import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OngoingTestComponent } from './ongoing-test/ongoing-test.component';
import { NewTestComponent } from './new-test/new-test.component';

const ROUTES:Route[] = 
[
  {path:"search", component:SearchComponent},
  {path:"ongoingtest", component:OngoingTestComponent},
  {path:"newtest", component:NewTestComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OngoingTestComponent,
    NewTestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
