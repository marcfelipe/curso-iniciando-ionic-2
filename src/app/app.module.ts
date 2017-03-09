import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { AlertPage } from '../pages/alert/alert';
import { ConnectionService } from '../providers/connection-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestPage,
    AlertPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestPage,
    AlertPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConnectionService]
})
export class AppModule {}
