import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
      ],
      exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
      ],
      imports: [
        SharedModule 
      ],
      providers: [],
      bootstrap: []
})

export class PagesModule{}