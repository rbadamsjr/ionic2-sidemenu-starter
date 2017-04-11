import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ChatPage } from './chat';

@NgModule({
  declarations: [
    ChatPage,
  ],
  exports: [
    ChatPage
  ]
})
export class ChatModule {}
