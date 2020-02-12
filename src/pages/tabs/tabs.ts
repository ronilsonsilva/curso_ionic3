import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BotoesPage } from '../botoes/botoes';
import { CardPage } from '../card/card';
import { ToastPage } from '../toast/toast';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  botoesPage = BotoesPage;
  cardPage = CardPage;
  toastPage = ToastPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
