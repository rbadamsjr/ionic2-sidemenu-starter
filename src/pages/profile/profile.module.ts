import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfileModule {}
