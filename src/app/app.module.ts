import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTES } from './app.routes';

//Modules
import { PagesModule } from './pages/pages.module';

//Servicios
import { SettingsService } from './services/settings.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // DashboardComponent,
    // ProgressComponent,
    // Graphics1Component,
    //PagesComponent,
    // NopagefoundComponent,
    // HeaderComponent,
    // SideBarComponent,
    // BreadcrumbsComponent,
    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule  
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
