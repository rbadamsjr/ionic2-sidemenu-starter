import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  public chatGroups:Array<{groupName: string, imgSrc: string,count: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chatGroups = [
      {groupName:'General',imgSrc:'https://unsplash.it/300/150/?blur&12',count:3},
      {groupName:'Everything',imgSrc:'https://unsplash.it/300/150/?blur/bwfru',count:25},
      {groupName:'Meeting',imgSrc:'https://placeimg.com/350/150/nature/grayscale',count:100}
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chat');
  }

}
