import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',

      subMenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Progress Bar', url: '/progress' },
        { title: 'Graficas ', url: '/graphics' },
        { title: 'Promesas ', url: '/promises' },
        { title: 'Rxjs ', url: '/rxjs' },
      ]
    }

  ];

  constructor() { }
}
