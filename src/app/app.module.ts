import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { HotTableModule } from "@handsontable/angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OngoingTestComponent } from './ongoing-test/ongoing-test.component';
import { NewTestComponent } from './new-test/new-test.component';
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CompatResultComponent } from './compat-result/compat-result.component';

import { TypeAcPipe } from './pipes/type-ac.pipe';
import { FranchisePipe } from './pipes/franchise.pipe';
import { CpqcpPipe } from './pipes/cpqcp.pipe';
import { FournisseurPipe } from './pipes/fournisseur.pipe';
import { MateriauPipe } from './pipes/materiau.pipe';
import { DecorTypePipe } from './pipes/decor-type.pipe';
import { PackModelPipe } from './pipes/pack-model.pipe';
import { VracNamePipe } from './pipes/vrac-name.pipe';
import { VracNumberPipe } from './pipes/vrac-number.pipe';
import { TestPipe } from './pipes/test.pipe';
import { DerogationPipe } from './pipes/derogation.pipe';
import { TestFamilyPipe } from './pipes/test-family.pipe';
import { CodeACPipe } from './pipes/code-ac.pipe';
import { CodeGPipe } from './pipes/code-g.pipe';
import { ProductNamePipe } from './pipes/product-name.pipe';
import { CampaignCodePipe } from './pipes/campaign-code.pipe';
import { CampaignNamePipe } from './pipes/campaign-name.pipe';
import { TriCompatPipe } from './pipes/tri-compat.pipe';
import { AscendRiskCompatPipe } from './pipes/ascend-risk-compat.pipe';

import { BigService } from './big.service';
import { CompatService } from "./compat.service";
import { LoginComponent } from './login/login.component';
import { ResultPipe } from './result.pipe';
import { StartDatePipe } from './pipes/start-date.pipe';
import { EndDatePipe } from './pipes/end-date.pipe';
import { ColorMatPremPipe } from './pipes/color-mat-prem.pipe';



const appRoutes: Routes =
  [
    { path: "search", component: SearchComponent },
    { path: "searchPage", component: SearchPageComponent },
    { path: "ongoingtestPage", component: OngoingTestComponent },
    { path: "newtestPage", component: NewTestComponent },
    { path: "loginPage", component: LoginComponent },
    { path: "", redirectTo: "loginPage", pathMatch: "full" },
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
    CompatResultComponent,
    TriCompatPipe,
    AscendRiskCompatPipe,
    LoginComponent,
    ResultPipe,
    StartDatePipe,
    EndDatePipe,
    ColorMatPremPipe,
  ],
  imports: [
    BrowserModule,
    HotTableModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [BigService, CompatService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
