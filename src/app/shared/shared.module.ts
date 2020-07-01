import { NgModule } from "@angular/core";
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


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
      ],
      providers: [],
      bootstrap: []
})

export class SharedModule{}