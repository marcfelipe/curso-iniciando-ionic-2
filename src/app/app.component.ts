import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ConnectionService } from '../providers/connection-service';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { AlertPage } from '../pages/alert/alert';


@Component({
  templateUrl: 'app.html',
  providers: [ConnectionService]
})
export class MyApp {

  pages : Array<{component: any, title: string, icon: string}>;


  rootPage = HomePage;

  constructor(platform: Platform, private menuCtrl: MenuController, private connectionService: ConnectionService) {

    this.pages = [
      {component: HomePage , title:'Home', icon: 'home'},
      {component: MenuTestPage , title:'Consultar CEP', icon: 'md-archive'},
      {component: AlertPage , title:'Alert Page', icon: 'megaphone'}
  ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openPage(page: any): void {
    this.rootPage = page.component;
    this.menuCtrl.close();
  }
}
