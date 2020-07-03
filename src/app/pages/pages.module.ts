import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

//Temporal
import { IncrementorComponent } from '../components/incrementor/incrementor.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        IncrementorComponent
      ],
      exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
      ],
      imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
      ],
      providers: [],
      bootstrap: []
})

export class PagesModule{}