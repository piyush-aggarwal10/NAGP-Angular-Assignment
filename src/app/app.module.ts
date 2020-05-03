import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { NewsManagementService } from './services/news-management.service';
import { NewsSectionComponent } from './news-section/news-section.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CredentialService } from './services/credentials.service';
import { LoginComponent } from './login/login.component';
import { RouteInfo } from './shared/route';
import { PageNotFoundComponent } from './shared/other-components/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/other-components/header/header.component';
import { FooterComponent } from './shared/other-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, DistrictDetailsComponent, PrecautionsComponent, NewsSectionComponent, AdminPanelComponent, LoginComponent, PrecautionsComponent, PageNotFoundComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, RouteInfo
  ],
  providers: [HttpService, NewsManagementService, CredentialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
