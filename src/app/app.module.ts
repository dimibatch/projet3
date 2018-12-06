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
import { TypeAcPipe } from './type-ac.pipe';
import { FranchisePipe } from './franchise.pipe';
import { CpqcpPipe } from './cpqcp.pipe';
import { FournisseurPipe } from './fournisseur.pipe';
import { MateriauPipe } from './materiau.pipe';
import { DecorTypePipe } from './decor-type.pipe';
import { PackModelPipe } from './pack-model.pipe';
import { VracNamePipe } from './vrac-name.pipe';
import { VracNumberPipe } from './vrac-number.pipe';
import { TestPipe } from './test.pipe';
import { DerogationPipe } from './pipes/derogation.pipe';
import { TestFamilyPipe } from './pipes/test-family.pipe';
import { CodeACPipe } from './pipes/code-ac.pipe';
import { CodeGPipe } from './pipes/code-g.pipe';
import { ProductNamePipe } from './pipes/product-name.pipe';
import { CampaignCodePipe } from './pipes/campaign-code.pipe';
import { CampaignNamePipe } from './pipes/campaign-name.pipe';
import { ResultatPipe } from './pipes/resultat.pipe';
import { DateDebutPipe } from './pipes/date-debut.pipe';


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
    DerogationPipe,
    TestFamilyPipe,
    CodeACPipe,
    TypeAcPipe,
    FranchisePipe,
    CpqcpPipe,
    FournisseurPipe,
    MateriauPipe,
    DecorTypePipe,
    PackModelPipe,
    VracNamePipe,
    VracNumberPipe,
    TestPipe,
    CodeGPipe,
    ProductNamePipe,
    CampaignCodePipe,
    CampaignNamePipe,
    ResultatPipe,
    DateDebutPipe,
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
