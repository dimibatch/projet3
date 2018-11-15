import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OngoingTestComponent } from './ongoing-test/ongoing-test.component';
import { NewTestComponent } from './new-test/new-test.component';
import { SearchPageComponent } from './search-page/search-page.component';

const appRoutes:Routes = 
[
  {path:"search", component:SearchComponent},
  {path:"searchPage", component:SearchPageComponent},
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
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing:true
      }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
