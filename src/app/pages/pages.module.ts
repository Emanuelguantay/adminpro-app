import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
//ng2-Char
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

//Temporal
import { IncrementorComponent } from '../components/incrementor/incrementor.component';
import { DoughnutCharComponent } from '../components/incrementor/Graphics/doughnutChar/doughnutChar.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        IncrementorComponent,
        DoughnutCharComponent,
        AccountSettingsComponent
      ],
      exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
      ],
      imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
      ],
      providers: [],
      bootstrap: []
})

export class PagesModule{}