import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  selectOptions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectOptions = {
      title: 'Frutas a Venda',
      subTitle: 'Selecione a fruta que você mais gosta.',
      mode: 'ios'
    }
  }

}
