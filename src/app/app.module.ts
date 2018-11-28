import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { HotTableModule } from "@handsontable/angular";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OngoingTestComponent } from './ongoing-test/ongoing-test.component';
import { NewTestComponent } from './new-test/new-test.component';
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { BigService } from './big.service';

const appRoutes:Routes = 
[
  {path:"search", component:SearchComponent},
  {path:"searchPage", component:SearchPageComponent},
  {path:"ongoingtestPage", component:OngoingTestComponent},
  {path:"newtestPage", component:NewTestComponent},
  {path:"", redirectTo:"search", pathMatch:"full"},
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
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing:true
      }
      )
  ],
  providers: [BigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
