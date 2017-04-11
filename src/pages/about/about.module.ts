import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AboutPage } from './about';

@NgModule({
  declarations: [
    AboutPage,
  ],
  exports: [
    AboutPage
  ]
})
export class AboutModule {}
