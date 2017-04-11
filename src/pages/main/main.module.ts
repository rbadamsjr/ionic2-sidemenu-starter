import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MainPage } from './main';

@NgModule({
  declarations: [
    MainPage,
  ],
  exports: [
    MainPage
  ]
})
export class MainModule {}
