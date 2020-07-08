import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
  }

  changeColor(theme: string, link: any){
    console.log(link);

    this.applyCheck(link);
    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
  }

  applyCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');
    
    for ( let ref of selectores){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

}
