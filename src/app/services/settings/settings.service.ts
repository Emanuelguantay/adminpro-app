import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  setting: Setting = {
    themeUrl: "assets/css/colors/default.css",
    theme: "default"
  };

  constructor( @Inject(DOCUMENT) private _document, ) {
    this.loadSettings();
  }

  sendSettings(){
    localStorage.setItem('settings', JSON.stringify(this.setting));
  }

  loadSettings(){
    if( localStorage.getItem('settings')){
      this.setting = JSON.parse(localStorage.getItem('settings'));
      this.applyTheme(this.setting.theme);
    }else{
      this.applyTheme(this.setting.theme);
    }
  }

  applyTheme(theme: string){

    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.setting.theme = theme;
    this.setting.themeUrl = url;

    this.sendSettings();
  }
}

//Interface
interface Setting {
  themeUrl: string;
  theme: string;
}
