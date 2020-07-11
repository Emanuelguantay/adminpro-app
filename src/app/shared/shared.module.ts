import { NgModule } from "@angular/core";
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SideBarComponent,
        BreadcrumbsComponent,
      ],
      exports: [
        NopagefoundComponent,
        HeaderComponent,
        SideBarComponent,
        BreadcrumbsComponent,
      ],
      imports: [
        RouterModule,
        CommonModule 
      ],
      providers: [],
      bootstrap: []
})

export class SharedModule{}