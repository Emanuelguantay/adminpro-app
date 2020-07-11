import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {

  constructor( public _sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

}
