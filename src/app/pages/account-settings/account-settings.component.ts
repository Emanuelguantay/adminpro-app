import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  constructor( 
                public _settings: SettingsService
              ) { }

  ngOnInit(): void {
    this.changeCheck();
  }

  changeColor(theme: string, link: any){
    console.log(link);

    this.applyCheck(link);
    this._settings.applyTheme(theme);
    // let url = `assets/css/colors/${theme}.css`;
    // this._document.getElementById('theme').setAttribute('href', url);

    // this._settings.setting.theme = theme;
    // this._settings.setting.themeUrl = url;

    // this._settings.sendSettings();
  }

  applyCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');
    
    for ( let ref of selectores){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  changeCheck(){
    let selectores: any = document.getElementsByClassName('selector');

    let theme = this._settings.setting.theme;
    for ( let ref of selectores){
      if( ref.getAttribute('data-theme') === theme ){
        ref.classList.add('working');
        break;
      }
    }
  }

}
