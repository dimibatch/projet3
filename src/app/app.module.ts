import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { HotTableModule } from "@handsontable/angular";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OngoingTestComponent } from './ongoing-test/ongoing-test.component';
import { NewTestComponent } from './new-test/new-test.component';
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CompatResultComponent } from './compat-result/compat-result.component';

import { CompatService } from "./compat.service";
import { TriCompatPipe } from './tri-compat.pipe';
import { AscendRiskCompatPipe } from './ascend-risk-compat.pipe';


const appRoutes: Routes =
  [
    { path: "search", component: SearchComponent },
    { path: "searchPage", component: SearchPageComponent },
    { path: "ongoingtestPage", component: OngoingTestComponent },
    { path: "newtestPage", component: NewTestComponent },
    { path: "", redirectTo: "search", pathMatch: "full" },
  ]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OngoingTestComponent,
    NewTestComponent,
    HeaderComponent,
    SearchPageComponent,
    SearchResultComponent,
    CompatResultComponent,
    TriCompatPipe,
    AscendRiskCompatPipe,
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [CompatService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
